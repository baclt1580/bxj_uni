<template>
	<scroll-view :scroll-y="true" :style="{height:listHeight+'px'}" class="list">
		<bbItem :bbItemInfo="bbItemInfo" v-for="bbItemInfo in itemInfos"></bbItem>
		<u-empty
				v-if="!itemInfos.length",
				mode="list"
		>
		</u-empty>
	</scroll-view>
</template>

<script>
	import bbItem from "../bbItem/bbItem.vue";
	import {getUserTasks,getRecivedTask} from '@/common/bbApis/bbApis.js'
	export default{
		async created(){
			uni.$on("refreshbb",this._initData);
			await this._initData()
		},
		props:["listHeight","activeTab"],
		data() {
			return {
				itemInfos:[]
			}
		},
		methods:{
			async _initData(){
				let id=this.$store.state.$userInfo._id;
				let getTask=this.activeTab==1?getUserTasks:getRecivedTask;
				uni.showLoading({
					title:"正在加载"
				})
				let res=await getTask({id,pageSize:10,page:1});
				uni.hideLoading()
				this.itemInfos=res;
			}
		},
		components:{
			bbItem
		},
		watch:{
			activeTab(v){
				this._initData()
			}
		}
	}
</script>

<style lang="scss">
.list{
	background-color: #f5f5f5;
	padding: 30rpx 0;
	.bbItem{
		margin:0 auto;
		margin-bottom:20rpx;
	}
}
</style>
