<template>
	<div class="bbHeader">
		<u-search placeholder="任务标题或任务标签名" @clear="search" @custom="search" @search="search" v-model="searchStr"></u-search>
		<div class="toMyTask" @click="toUserbb">我的</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchStr: ""
			}
		},
		methods:{
			toUserbb(){
				uni.navigateTo({
					url:"/pages/bb/pages/userbb/userbb",
					fail(e){
						console.log(e)
					}
				})
			},
			search(){
				this.$emit("search",this.searchStr)
			}
		}
		
	}
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
