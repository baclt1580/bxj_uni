<template>
	<!-- 帮帮任务列表 -->
	<view class="bb">
		<bbHeader></bbHeader>
		<div class="bbList" v-if="bbItemInfos">
			<bbItem :bbItemInfo="bbItemInfo" v-for="bbItemInfo in bbItemInfos" :key="bbItemInfo._id"></bbItem>
		</div>
	</view>
</template>

<script>
	import bbItem from "./components/bbItem/bbItem.vue"
	import bbHeader from "./components/bbHeader/bbHeader.vue"
	import {getTasks} from "@/common/bbApis/bbApis.js"
	
	export default {
		async created() {
			await this.init()
			uni.$on("refreshbb",this.init)
		},
		async onPullDownRefresh(){
			await this.init()
			uni.stopPullDownRefresh()
		},
		data() {
			return {
				bbItemInfos:null
			}
		},
		methods: {
			async init(){
				let res=await getTasks({
					pageSize:8,
					page:1
				})
				this.bbItemInfos=res;
			}
		},
		components:{
			bbItem,
			bbHeader
		}
	}
</script>

<style lang="scss" scoped>
	.bb{
		color:$fontColor;
		background-color: #f5f5f5;
		height: 100vh;
		padding-top:120rpx;
		
		.bbList{
			
			.bbItem{
				margin:0 auto;
				margin-top:20rpx;
				
			}
		}
	}
</style>
