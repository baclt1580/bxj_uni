<template>
	<!-- 帮帮任务列表 -->
	<view class="bb">
		<bbHeader @search="search"></bbHeader>
		<div class="bbList" v-if="bbItemInfos">
			<bbItem :bbItemInfo="bbItemInfo" v-for="bbItemInfo in bbItemInfos" :key="bbItemInfo._id"></bbItem>
			<u-loadmore status="loading" v-show="showLoading" style="padding-top:30rpx;padding-bottom:30rpx;"/>
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
		async onReachBottom(){
			if(this.bbItemInfos.length%8!=0||this.showLoading){
				console.log("加载完了或正在加载")
				return;
			}
			this.showLoading=true;
			let res=await getTasks({
				searchStr:this.searchStr||null,
				pageSize:8,
				page:++this.page
			})
			this.showLoading=false;
			this.bbItemInfos.push(...res)
		},
		data() {
			return {
				bbItemInfos:null,
				page:1,
				showLoading:false,
				searchStr:""
			}
		},
		methods: {
			async init(){
				this.showLoading=true;
				let res=await getTasks({
					pageSize:8,
					page:1,
					searchStr:this.searchStr||null
				})
				console.log(res)
				this.showLoading=false;
				this.bbItemInfos=res;
			},
			async search(v){
				console.log("搜索")
				this.searchStr=v;
				uni.showLoading({
					title:"正在加载"
				})
				await this.init()
				uni.hideLoading()
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
		padding-top:120rpx;
		min-height: 100vh;
		.bbList{
			
			.bbItem{
				margin:0 auto;
				margin-top:20rpx;
			}
		}
	}
</style>
