<template>
	<div class="dynamic">
		<scroll-view class="dynamicList" :style="{height:listHeight}" scroll-y @scrolltolower="loadingMore">
				<div class="dynamicItem" v-for="dynamic in dynamics" :key="dynamic._id">
					<!-- 用户信息 -->
					<div class="info">
						<div class="infoLeft">
							<div class="avatar">
								<image src="../assets/avatar.jpg" mode="widthFix"></image>
							</div>
						</div>
						<div class="infoRight">
							<div class="username">{{dynamic.user.userInfo.nickname}}</div>
							<div class="time">{{dynamic.time|time}}</div>
						</div>
						<div v-if="_isMyDynamic(dynamic)" class="menus" @click="showMenus(dynamic._id)" style="margin-left:auto;margin-right:50rpx;">
							<u-icon name="list"  color="#06c2ad" size="28"></u-icon>
						</div>
					</div>
					<!-- 内容 -->
					<div class="content">
						<u-read-more closeText="展开" :shadowStyle="{backgroundImage: 'none',paddingTop: '0',marginTop: '20rpx'}" textIndent="0" color="#06c2ad">
						{{dynamic.content}}
						</u-read-more>
						<image :src="_img(img)" @click="preViewImg(dynamic.images,index)" mode="widthFix" v-for="(img,index) in dynamic.images" :key="img" style="width:200rpx;margin-right:20rpx"></image>
					</div>
					<!-- 菜单 -->
					<div class="menus">
						<div class="showComment">
							<image src="../assets/comment.png" mode="widthFix" style="width: 50rpx;" @click="showComment(dynamic._id)"></image>
						</div>
					</div>
					<!-- 评论 -->
					<div class="comments">
						<div class="commentItem" v-for="(reply,index) in dynamic.replys" :key="reply._id">
							<text class="username">{{reply.user.userInfo.nickname}}:</text>
							<text v-if="reply.isShowAll">
								{{reply.content}}
							</text>
							<text>
								{{reply.content|sliceContent}}
							</text>
							
							<text v-if="reply.content.length>110&&!reply.isShowAll" style="color:#09f;" @click="showAll(reply)">展开</text>
							<text v-if="reply.content.length>110&&reply.isShowAll" style="color:#09f;" @click="reply.isShowAll=false">折叠</text>
						</div>
					</div>
					<!-- 评论分页器 -->
					<div class="commentPages" v-if="dynamic.replySum>8">
						<div class="currentInfo">
							{{dynamic.page}}/{{Math.ceil(dynamic.replySum/8)}}
						</div>
						<div class="input" v-if="dynamic.replySum>24">
							去第<input type="text" value="5" />页 <view style="margin-left: 20rpx;font-weight:bold">Go</view>
						</div>
						<div class="pageBtns">
							<div class="pageBtn prePage" @click="dynamic.page--;_refreshReplys(dynamic._id)">上一页</div>
							<div class="pageBtn nextPage" @click="dynamic.page++;_refreshReplys(dynamic._id)">下一页</div>
						</div>
					</div>
					<u-line></u-line>
				</div>
				<u-empty
						v-if="dynamics&&!dynamics.length",
						mode="list"
				>
				</u-empty>
				<u-loadmore status="loading" v-show="isShowLoading"/>
		</scroll-view>
		
		<!-- 非文档流 -->
		<u-empty mode="list" v-if="dynamics&&!dynamics.length" width="80" height="80" style="margin-top: 100rpx;" text="没有动态"></u-empty>
		<!-- 创建评论 -->
		<u-popup :show="isShowComment" mode="bottom" overlayOpacity=".3" duration="200" @close="hideComment" @open="showComment" :customStyle="{position:'relative'}">
			<div class="btns">
				<u-button text="回复" color="#06c2ad" size="small" class="btn replyBtn" @click="createReply(comment.currentId)"></u-button>
				<u-button text="清空" color="#e74c3c" size="small" class="btn cleatBtn" @click="clearCommentContent(comment.currentId)"></u-button>
			</div>
			<u--textarea v-model="comment[comment.currentId].content" placeholder="请输入内容" count :maxlength="500" focus></u--textarea>
		</u-popup>
		<!-- 创建动态按钮 -->
		<navigator url="/pages/createDynamic/createDynamic" class="createDynamic" >
			<image src="../assets/createDynamic.png" mode="widthFix" class="createIcon"></image>
		</navigator>
	</div>
	
</template>

<script>
	import {createDynamic,getUserDynamics,getDynamic,createReply,getReply,getDynamicById,deleteDynamic} from "@/common/api.js";
	import dayjs from "dayjs";
	const dynamicPageSize=20;
	const replyPageSize=8;
	const commentPageSize=8;
	export default {
		name:"dynamic",
		props:["listHeight","activeTab"],
		async created(){
			this.isShowLoading=true;
			await this._initData()
			this.isShowLoading=false;
			uni.$on("refreshReply",(id)=>{
				
				this._refreshReplys(id)
			})
			uni.$on("refreshDynamic",this._initData)
		},
		data() {
			return {
				dynamics:null,  //动态
				isShowComment:false, //是否正在显示创建评论框
				isShowLoading:true, 
				//本地记录用户对某个动态的评论,用于缓存内容
				comment:{
					currentId:"_id",
					"_id":{
						content:""
					}
				}
			};
		},
		computed:{
			currentPage(){
				return Math.ceil(this.dynamics.length/dynamicPageSize);
			}
		},
		methods:{
			async loadingMore(){
				if(this.isShowLoading)return;
				if(!this.dynamics.length||this.dynamics.length%dynamicPageSize!=0) {
					console.log("已加载完")
					this.isShowLoading=false;
					return;
				}
				this.isShowLoading=true;
				let {dynamics}=this;
				let newDynamics=await this._getDynamics({
					pageSize:dynamicPageSize,
					page:this.currentPage+1
				});
				
				newDynamics.forEach(this._initDynamic)
				this.dynamics.push(...newDynamics)
				this.isShowLoading=false;
			},
			async createReply(id){
				uni.showLoading({
					title:"正在提交"
				})
				let {content}=this.comment[id]
				let res=await createReply({id,content});
				uni.hideLoading()
				if(!res){
					uni.$u.toast("评论失败");
					return false;
				}
				uni.$emit("refreshReply",id);
				this.clearCommentContent(id);
				this.hideComment();
				uni.$u.toast("评论成功");
			},
			clearCommentContent(id){
				return this.comment[id]&&(this.comment[id].content="")
			},
			hideComment(){
				this.comment.currentId="_id";
				uni.showTabBar({
					success:()=>{
						this.isShowComment=false;
					}
				})
			},
			showComment(id){
				this.comment.currentId=id;
				if(!this.comment[id]){
					this.$set(this.comment,id,{
						content:""
					})
				}
				uni.hideTabBar({
					success: () => {
						this.isShowComment=true;
					}
				})
			},
			//显示评论全部内容
			showAll(reply){
				if(!reply.isShowAll){
					this.$set(reply,"isShowAll",true)
				}
			},
			//预览动态图片
			preViewImg(images,current){
				images=images.map(img=>this._img(img))
				console.log(images)
				uni.previewImage({
					current,
					urls:images
				})
			},
			//刷新某个动态的评论
			async _refreshReplys(id){
				console.log("刷新评论",id)
				let dynamic=this.dynamics.find(dynamic=>dynamic._id==id)
				if(!dynamic){
					console.log("没找到该动态")
					return;
				};
				let {page,replySum,replys}=dynamic;
				//一共的页数
				let pageSum=Math.ceil(replySum/commentPageSize);
				//如果超过总页数或为负数则page设置为1
				if(page<1||page>pageSum) {
					dynamic.page=1;
					page=1;
				}
				uni.showLoading({
					title:"正在加载"
				})
				dynamic.replys=await getReply({
					id:dynamic._id,
					pageSize:commentPageSize,
					page
				})
				uni.hideLoading()
			},
			showMenus(id){
				console.log("删除")
				uni.showActionSheet({
					itemList:["删除该动态"],
					itemColor:"#e74c3c",
					success:async ({tapIndex})=>{
						if(tapIndex==0){
							let res=await deleteDynamic({id});
							uni.$emit("refreshDynamic")
							console.log(res)
						}
					}
				})
			},
			//初始化动态列表
			async _initData(){
				console.log("initData")
				uni.showLoading({
					title:'正在加载'
				})
				let res=await this._getDynamics({
					pageSize:dynamicPageSize,
					page:1
				});
				
				uni.hideLoading()
				res.forEach(this._initDynamic);
				this.dynamics=res;
			},
			// 初始化dynamic,从请求获取到的dynamic对象需要初始化以附加page属性来标识当前评论页数
			_initDynamic(dynamic){
				this.$set(dynamic,"page",1)
			},
			_getDynamics(...params){
				
				return this.activeTab==1?getDynamic(...params):getUserDynamics(...params);
				
			},
			_img(str){
				let arr=str.split("/");
				let link
				if(str.includes("http")){
					 link="http://192.168.0.108:3000/"+arr.slice(-3).join("/");
					
				}else{
					link="http://192.168.0.108:3000/"+str
				}
				console.log(link)
				return link;
			},
			_isMyDynamic(dynamic){
				let {user:{_id}}=dynamic;
				return _id==this.$store.state.$userInfo._id;
			}
		},
		filters: {
			sliceContent(content){
				if(content?.length>110){
					return content.slice(0,100)+"..."
				}
				return content
			},
			time(time){
				return dayjs(time).format("YYYY-MM-DD HH:mm:ss")
			}
		},
		watch: {
			async activeTab(newValue, oldValue) {
				uni.showLoading({
					title:"正在加载"
				})
				await this._initData()
				uni.hideLoading()
			}
		},
	}
	
</script>

<style lang="scss" scoped>
	.dynamic{
		.dynamicList{
			padding-top: 20rpx;
			.dynamicItem{
				padding:0 20rpx;
				margin-bottom: 40rpx;
				.info{
					height:120rpx;
					display: flex;
					// border:1px solid red;
					.infoLeft{
						.avatar{
							image{
								width:100rpx;
								border-radius: 50%;
							}
						}
					}
					.infoRight{
						height:120rpx;
						display: flex;
						justify-content: center;
						flex-direction: column;
						margin-left:20rpx;
						.username{
							color:$mainColor;
							margin-bottom: 20rpx;
						}
						.time{
							color:#BBBCBE;
							font-size: 24rpx;
						}
					}
				}
				.content{
					margin-top: 20rpx;
					margin-bottom: 50rpx;
					font-size: 32rpx;
					letter-spacing:1rpx;
					line-height: 1.25em;
				}
				.menus{
					margin-top: 10rpx;
				}
				.comments{
					margin-top: 10rpx;
					.commentItem{
						background-color: #F7F8FA;
						border-radius: 6rpx;
						padding:20rpx;
						margin-bottom: 10rpx;
						&:last-child{
							margin-bottom:40rpx;
						}
						.username{
							color:$mainColor;
						}
					}
				}
				.commentPages{
					display: flex;
					margin-bottom: 30rpx;
					justify-content: space-between;
					color:$mainColor;
					
					.input{
						width:250rpx;
						display: flex;
						
						input{
							color:$fontColor;
							width:100rpx;
							border-bottom: 1px solid #09f;;
							text-align: center;
						}
					}
					.pageBtns{
						display: flex;
						
						.pageBtn{
							&.nextPage{
							margin-left:30rpx;
							}
						}
					}
					
				}
			}
			
		}
		//评论弹出框btns
		.btns{
			position: absolute;
			top:0;
			right:80rpx;
			transform: translateY(-100%);
			display: flex;
			.btn{
				border-radius:8rpx 8rpx 0 0;
				&.replyBtn{
					margin-right: 20rpx;
				}
			}
		}
		.createDynamic{
			width:110rpx;
			height:110rpx;
			background-color: $mainColor;
			border-radius: 50%;
			position: fixed;
			right: 30rpx;
			bottom:200rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// opacity: .6;
			.createIcon{
				width:60rpx;
			}
		}
	}
	
</style>
