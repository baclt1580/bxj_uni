<template>
	<div class="list">
		<bbItem :bbItemInfo="bbItemInfo" v-for="bbItemInfo in itemInfos"></bbItem>
	</div>
</template>

<script>
	import bbItem from "../bbItem/bbItem.vue";
	import {getUserTasks} from '@/common/bbApis/bbApis.js'
	export default{
		async created(){
			let id=this.$store.state.$userInfo._id;
			let res=await getUserTasks({id,pageSize:10,page:1});
			console.log(res)
			this.itemInfos=res;
		},
		data() {
			return {
				itemInfos:[]
			}
		},
		components:{
			bbItem
		}
	}
</script>

<style lang="scss">
.list{
	background-color: #f5f5f5;
	padding:30rpx 0;
	.bbItem{
		margin:0 auto;
		margin-bottom:20rpx;
	}
}
</style>
