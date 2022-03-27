<template>
	<view class="userbb">
		<navigator url="/pages/createTask/createTask" class="toCreate">
			<u-icon name="file-text" color="#ffffff"></u-icon>发布任务
		</navigator>
		<div class="info">
			<div class="infoItem">
				<div class="value">
					{{reciverCount}} <span class="company">单</span>
				</div>
				<div class="title">已接</div>
			</div>
			<div class="infoItem">
				<div class="value">
					{{pubCount}} <span class="company">单</span>
				</div>
				<div class="title">已发布</div>
			</div>
		</div>
		<div class="tabs">
			<div class="tab pub active">
				我发布的
			</div>
			<div class="tab sub">
				我接受的
			</div>
		</div>
		<bbList :listHeight="listHeight"></bbList>
	</view>
</template>

<script>
	import {getReciverCount,getPubCount} from "@/common/bbApis/bbApis.js"
	import list from "./components/list/list.vue";
	import {getDomRect,getWindowHeight} from "@/util/utils.js";
	export default {
		async created(){
			this.reciverCount=(await getReciverCount()).count;
			this.pubCount=(await getPubCount()).count;
			let {bottom}=await getDomRect(this,".tabs");
			let windowHeight=await getWindowHeight();
			this.listHeight=windowHeight-bottom;
		},
		data() {
			return {
				reciverCount:0,
				pubCount:0,
				listHeight:0
			}
		},
		methods: {
			
		},
		components:{
			bbList:list
		}
	}
</script>

<style lang="scss">
	.userbb{
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
		background-color: #f5f5f5;
		.toCreate{
			position: absolute;
			right:30rpx;
			top:0;
			display: flex;
			color:#ffffff;
		}
		.info{
			min-height: 300rpx;
			background-color: $mainColor;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding:0 60rpx;
			.infoItem{
				
			// border:1rpx solid red;
				.value{
					color:#fff;
					font-size: 64rpx;
					.company{
						font-size: 32rpx;
						vertical-align: top;
					}
					
				}
				.title{
					margin-top: 10rpx;
					color:#fff;
					text-align: center;
				}
			}
		}
		.tabs{
			min-height:100rpx;
			display: flex;
			
			background-color: $mainColor;
			border-top: 1px solid rgba(#E1E1E1, .6);
			.tab{
				width:50%;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				color: #7f8c8d;
				&.active{
					color:#fff;
				}
				&:first-child{
					border-right: 1px solid rgba(#E1E1E1, .6);
				}
			}
		}
		.list{
			flex-grow: 1;
		}
	}

</style>
