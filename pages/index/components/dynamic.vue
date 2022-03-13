<template>
	<div class="dynamic">
		<scroll-view class="dynamicList" :style="{height:listHeight}" scroll-y @scrolltolower="loadingMore">
				<div class="dynamicItem" v-for="dynamic in dynamics" :key="dynamic._id">
					<div class="info">
						<div class="infoLeft">
							<div class="avatar">
								<image src="../assets/avatar.jpg" mode="widthFix"></image>
							</div>
						</div>
						<div class="infoRight">
							<div class="username">{{dynamic.user.userInfo.nickname}}</div>
							<div class="time">{{dynamic.time}}</div>
						</div>
						
					</div>
					
					<div class="content">
						<u-read-more closeText="展开" :shadowStyle="{backgroundImage: 'none',paddingTop: '0',marginTop: '20rpx'}" textIndent="0" color="#06c2ad">
						{{dynamic.content}}
						</u-read-more>
					</div>
					<div class="menus">
						<image src="../assets/comment.png" mode="widthFix" style="width: 50rpx;" @click="showComment(dynamic._id)"></image>
					</div>
					<div class="comments">
						<div class="commentItem" v-for="(reply,index) in dynamic.replys" :key="reply._id">
							<text class="username">{{reply.user.userInfo.nickname}}:</text>{{reply.isShowAll?reply.content:_formatContent(reply.content)}}
							<text v-if="reply.content.length>110&&!reply.isShowAll" style="color:#09f;" @click="showAll(reply)">展开</text>
							<text v-if="reply.content.length>110&&reply.isShowAll" style="color:#09f;" @click="reply.isShowAll=false">折叠</text>
						</div>
					</div>
					<div class="commentPages" v-if="dynamic.replySum>8">
						<div class="currentInfo">
							{{dynamic.page}}/{{Math.ceil(dynamic.replySum/8)}}
						</div>
						<div class="input" v-if="dynamic.replySum>24">
							去第<input type="text" value="5" />页 <view style="margin-left: 20rpx;font-weight:bold">Go</view>
						</div>
						<div class="pageBtns">
							<div class="pageBtn prePage" @click="dynamic.page--;_refreshReplys(dynamic)">上一页</div>
							<div class="pageBtn nextPage" @click="dynamic.page++;_refreshReplys(dynamic)">下一页</div>
						</div>
					</div>
					<u-line></u-line>
			
				</div>
				<u-loadmore status="loading" v-show="isShowLoading"/>
		</scroll-view>
		
		<u-popup :show="isShowComment" mode="bottom" overlayOpacity=".3" duration="200" @close="hideComment" @open="showComment" :customStyle="{position:'relative'}">
			<div class="btns">
				<u-button text="回复" color="#06c2ad" size="small" class="btn replyBtn" @click="createReply(comment.currentId)"></u-button>
				<u-button text="清空" color="#e74c3c" size="small" class="btn cleatBtn" @click="clearComment(comment.currentId)"></u-button>
			</div>
			<u--textarea v-model="comment[comment.currentId].content" placeholder="请输入内容" count :maxlength="500" focus></u--textarea>
		</u-popup>
	</div>
	
</template>

<script>
	import {createDynamic,getDynamic,createReply,getReply,getDynamicById} from "@/common/api.js";
	export default {
		name:"myDynamic",
		props:["listHeight"],
		async created(){
			console.log("created")
			this.loading=true;
			let res=await getDynamic({
				pageSize:8,
				page:1
			});
			this.isShowLoading=false;
			if(res?.length){
				res.forEach(dynamic=>dynamic.page=1);
				this.dynamics=res;
				
			}
		},
		data() {
			return {
				dynamics:null,
				isShowComment:false,
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
		methods:{
			async loadingMore(){
				if(this.isShowLoading)return;
				if(!this.dynamics.length||this.dynamics.length%8!=0) {
					this.isShowLoading=false;
					return;
				};
				this.isShowLoading=true;
				let {dynamics}=this;
				let currentPage=Math.ceil(dynamics.length/8);
				let newDynamics=await getDynamic({
					pageSize:8,
					page:currentPage+1
				});
				this.isShowLoading=false;
				newDynamics.forEach(dynamic=>dynamic.page=1)
				this.dynamics.push(...newDynamics)
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
				let newDynamic=await getDynamicById({id});
				
				let dynamic=this.dynamics.find(item=>item._id==id);
				
				dynamic.replys=newDynamic.replys;
				dynamic.replySum=newDynamic.replySum;
				this.comment[id].content="";
				this.hideComment();
				uni.$u.toast("评论成功");
			},
			async createDynamic(){
				let res=await createDynamic({
					content:this.str
				})
			},
			clearComment(id){
				console.log(id,this.comment[id].content)
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
			showAll(reply){
				if(!reply.isShowAll){
					this.$set(reply,"isShowAll",true)
				}
			},
			async _refreshReplys(dynamic){
				let {page,replySum,replys}=dynamic;
				//一共的页数
				let pageSum=Math.ceil(replySum);
				//如果超过总页数或为负数则page设置为1
				if(page<1||page>pageSum) {
					dynamic.page=1;
					page=1;
				}
				dynamic.replys=await getReply({
					id:dynamic._id,
					pageSize:8,
					page
				})
			},
			_formatContent(content){
				if(content?.length>110){
					return content.slice(0,100)+"..."
				}
				return content
			}
		}
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
	}
	
</style>
