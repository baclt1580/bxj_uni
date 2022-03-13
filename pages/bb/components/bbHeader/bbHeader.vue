<template>
	<div class="bbHeader">
		<u-search placeholder="任务标题或任务标签名" v-model="searchStr"></u-search>
		<div class="toMyTask">我的</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.bbHeader{
		width:100%;
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		top:0;
		display: flex;
		align-items: center;
		padding:0 30rpx;
		.toMyTask{
			color: $mainColor;
			margin-left: 30rpx;
		}
	}
</style>
