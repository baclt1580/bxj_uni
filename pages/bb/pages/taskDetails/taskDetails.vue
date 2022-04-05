<template>
	<view class="taskDetails" v-if="bbItemInfo">
		<div class="info">
			<div class="infoLeft">
				<div class="avatar">
					<image src="./assets/avatar.jpg" mode="widthFix"></image>
				</div>
			</div>
			<div class="infoRight">
				<div class="username">{{bbItemInfo.user.userInfo.nickname}}</div>
				<div class="time">{{bbItemInfo.time|time}}</div>
			</div>
			
			<div v-if="_isMyDynamic(bbItemInfo)" class="menus" @click="showMenus(bbItemInfo._id)" style="margin-left:auto;margin-right:50rpx;">
				<u-icon name="list"  color="#06c2ad" size="28"></u-icon>
			</div>
		</div>
		<div class="title">
			{{bbItemInfo.title}}
		</div>
		<div class="content">
			{{bbItemInfo.content}}
		</div>
		<u-line></u-line>
		<div class="taskInfo">
			<div class="item money">
				赏金:<span class="highLight">{{bbItemInfo.money}}元</span>
			</div>
			<div class="item status">
				任务状态: <span class="highLight">{{bbItemInfo.status|status}}</span>
			</div>
		</div>
		<div class="todos">
			<div class="do recive" v-if="rules.recive" @click="receiveTask">
				接收该任务
			</div>
			<!-- 接受者确认完成 -->
			<div class="do reciverConfirm" v-if="rules.reciverConfirm" @click="receiverConfirm">
				确认完成
			</div>
			<!-- 发布者确认完成 -->
			<div class="do senderConfirm" v-if="rules.senderConfirm">
				确认完成
			</div>
			<div class="do reciverCancelRecive" v-if="rules.reciverCancelRecive" @click="reciverCancelRecive">
				取消接受
			</div>
			<div class="do reciverCancelConfirm" v-if="rules.reciverCancelConfirm" @click="reciverCancelConfirm">
				取消确认
			</div>
			<div class="do senderRejectConfirm" v-if="rules.senderRejectConfirm">
				拒绝确认
			</div>
			
		</div>
		
	</view>
</template>

<script>
	import dayjs from "dayjs"
	import {getTaskById,receiveTask,receiverConfirm,senderConfirm,reciverCancelRecive,reciverCancelConfirm,rejectComplete} from "@/common/bbApis/bbApis"
	export default {
		async created(){
			let id=uni.$bbId
			
			uni.showLoading({
				title:"加载中"
			})
			let res=await getTaskById({id})
			if(res){
				this.bbItemInfo=res;
			}
			uni.hideLoading()
		},
		data() {
			return {
				bbItemInfo:null
			}
		},
		methods: {
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
			async receiveTask(){
				let {_id:id}=this.bbItemInfo;
				uni.showLoading({
					title:"接受任务"
				})
				let res=await receiveTask({id});
				if(res){
					await this._refreshInfo()
				}
				uni.hideLoading()
				
			},
			async receiverConfirm(){
				uni.showModal({
					title:"备注",
					confirmText:"提交",
					editable:true,
					placeholderText:"选填,最多200字",
					success:async (obj)=>{
						console.log(obj.confirm)
						if(obj.confirm){
							
							uni.showLoading({
								title:"确认完成"
							})
							let remarks=obj.content;
							console.log("remarks",remarks)
							let res=await receiverConfirm({id:this.bbItemInfo._id,remarks})
							console.log(res)
							if(res){
								await this._refreshInfo()
							}
							uni.hideLoading()
							uni.showToast({
								title:"已确认",
								duration:800
							})
						}
						
					}
				})
			
			},
			senderConfirm(){
				let res=senderConfirm()
			},
			async reciverCancelRecive(){
				uni.showLoading({
					title:"取消接收任务"
				})
				let res=await reciverCancelRecive({id:this.bbItemInfo._id})
				if(res){
					await this._refreshInfo()
				}
				uni.hideLoading()
				
			},
			async reciverCancelConfirm(){
				uni.showLoading({
					title:"取消确认"
				})
				let res=await reciverCancelConfirm({id:this.bbItemInfo._id});
				if(res){
					await this._refreshInfo()
				}
				uni.hideLoading()
			},
			rejectComplete(){
				
			},
			_isMyDynamic(task){
				let {user:{_id}}=task;
				return _id==this.$store.state.$userInfo._id;
			},
			async _refreshInfo(){
				let {_id:id}=this.bbItemInfo;
				let info=await getTaskById({id});
				if(info){
					this.bbItemInfo=info;
				}
			}
		},
		computed:{
			//对该任务能执行的操作
			//接收->接收者确认->发布者确认
			//接收->接收者确认->发布者拒绝
			rules(){
				let user=this.$store.state.$userInfo
				let {bbItemInfo}=this;
				let rules={
					//接受任务
					recive:false,
					//接受者确认完成
					reciverConfirm:false,
					//发布者确认完成
					senderConfirm:false,
					//接收者者取消接收
					reciverCancelRecive:false,
					//接受者者取消确认
					reciverCancelConfirm:false,
					//发布者拒绝确认
					senderRejectConfirm:false
				}
				//接受任务权限
				//状态为OPEN并且不是自己的
				console.log(bbItemInfo)
				if(bbItemInfo.status=="OPEN"&&bbItemInfo.user._id!=user._id){
					console.log(1)
					rules.recive=true
				}
				//接受者确认权限,接受者取消权限
				if(bbItemInfo.status=="RECEIVED"&&bbItemInfo.receiverId==user._id){
					console.log(2)
					rules.reciverConfirm=true
					rules.reciverCancelRecive=true
				}
				//接受者取消确认
				if(bbItemInfo.status=="DONE"&&bbItemInfo.receiverId==user._id){
					console.log(3)
					rules.reciverCancelConfirm=true
				}
				//发布者确认或拒绝确认
				if(bbItemInfo.status=="DONE"&&bbItemInfo.user._id==user._id){
					console.log(4)
					rules.senderConfirm=true
					rules.senderRejectConfirm=true
				}
				
				return rules;
				
			}
			
		},
		filters:{
			time(time){
				return dayjs(time).format("YYYY-MM-DD HH:mm:ss")
			},
			status(status){
				switch(status){
					case 'OPEN':
						return "待接收";	
					case 'RECEIVED':
						return "待接受者确认完成";	
					case 'DONE':
						return "待发布者确认完成";	
					case 'COMPLETE':
						return "已完成";	
				}
			}
		}
	}
</script>

<style lang="scss">
	.taskDetails{
		padding:0 20rpx;
		padding-top: 30rpx;
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
		.title{
			font-size: 36rpx;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.content{
			line-height: 1.4em;
			padding-bottom: 20rpx;
			margin:30rpx 0;
			font-size: 32rpx;
		}
		.taskInfo{
			margin-top: 30rpx;
			.item{
				margin-bottom:20rpx;
				&.money{
					.highLight{
						color:$mainColor;
						font-size: 32rpx;
					}
				}
				&.status{
					.highLight{
						color:$mainColor;
						font-size: 32rpx;
					}
				}
			}
		}
		.todos{
			margin-top: 30rpx;
			.do{
				width:90%;
				margin:0 auto;
				height: 80rpx;
				
				border-radius: 8rpx;
				color: #fff;
				font-size: 32rpx;
				margin-bottom:30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $mainColor;
				&.recive{
					background-color: $mainColor;
				}
				&.reciverConfirm,&.senderConfirm{
					background-color: $successColor;
				}
				&.reciverCancelRecive,&.reciverCancelConfirm,&.senderRejectConfirm{
					background-color: $errorColor;
				}
			}
		}
		
	}
</style>
