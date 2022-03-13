<template>
	<div class="bbItem">
		<div class="userInfo">
			<div class="username">{{bbItemInfo.user.userInfo.nickname}}</div>
		</div>
		<div class="title">
			{{bbItemInfo.title}}
		</div>
		<div class="info">
			<div class="time">{{bbItemInfo.time}}</div>
			<div class="money">¥{{bbItemInfo.money}}</div>
			<div class="tag" v-if="bbItemInfo.tag">{{bbItemInfo.tag}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["bbItemInfo"]
	}
</script>

<style lang="scss">
	.bbItem{
		height:180rpx;
		width:97vw;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		background-color: #fff;
		border-radius: 20rpx;
		.userInfo{
			.username{
				color:#626675;
			}
		}
		.title{
			font-size: 36rpx;
			color: $mainColor;
			
		}
		.info{
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: flex-end;
			.time{
				font-size: 24rpx;
				margin-right: auto;
			}
			.money{
				font-size: 36rpx;
				margin-left: 30rpx;
				color: $mainColor;
			}
			.tag{
				font-size: 24rpx;
				margin-left: 30rpx;
				border: 1rpx solid $mainColor;
				padding: 5rpx;
				border-radius: 8rpx;
				color: $mainColor;
			}
		}
	}
</style>
