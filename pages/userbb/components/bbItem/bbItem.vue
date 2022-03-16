<template>
	<div class="bbItem">
		<div class="leftInfo">
			<div class="userInfo">
				<div class="username">{{bbItemInfo.user.userInfo.nickname}}</div>
			</div>
			<div class="title">
				{{bbItemInfo.title}}
			</div>
			<div class="itemInfo">
				<div class="time">{{bbItemInfo.time|date}}</div>
				<div class="money">¥{{bbItemInfo.money}}</div>
				<div class="tag" v-if="bbItemInfo.tag">{{bbItemInfo.tag}}</div>
			</div>
		</div>
		<div class="rightInfo">
			<div class="status" :class="[bbItemInfo.status.toLowerCase()]">
				{{bbItemInfo.status|status}}
			</div>
		</div>
	</div>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		props:["bbItemInfo"],
		filters:{
			date(v){
				return dayjs(v).format("YYYY-MM-DD HH:mm:ss")
				
			},
			status(v){
				
				switch(v){
					case "OPEN":
						return "待接受";
					case "RECEIVED":
						return "已被接受";
					case "DONE":
						return "待确认"
					case "COMPLETE":
						return "已完成";
					default:
						return "未知"
				}
			}
		}
	}
</script>

<style lang="scss">
	.bbItem{
		height:180rpx;
		width:97vw;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		background-color: #fff;
		border-radius: 10rpx;
		.leftInfo{
		// border:1px solid red;
			.userInfo{
				.username{
					color:#626675;
				}
			}
			.title{
				font-size: 36rpx;
				color: $mainColor;
				margin-top:10rpx;
			}
			.itemInfo{
				display: flex;
				align-items: center;
				width: 100%;
				justify-content: flex-end;
				margin-top: 10rpx;
				.time{
					font-size: 24rpx;
					margin-right: auto;
				}
				.money{
					// border:1px solid red;
					width:80rpx;
					font-size: 36rpx;
					margin-left: 30rpx;
					color: $mainColor;
				}
				.tag{
					width:100rpx;
					font-size: 24rpx;
					margin-left: 20rpx;
					border: 1rpx solid $mainColor;
					padding: 5rpx 10rpx;
					color: $mainColor;
				}
			}
		}
		.rightInfo{
			
			.status{
				width:150rpx;
				border:1px solid $mainColor;
				padding: 10rpx;
				background-color:$mainColor;
				color:#fff;
				margin-right: 40rpx;
				font-size: 24rpx;
				text-align: center;
				.open{
					background-color:$mainColor;
				}
				&.complete{
					background-color:$mainColor;
				}
			}
		}
	}
</style>
