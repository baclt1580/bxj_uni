<template>
	<view>
		user
		<button @click="changeAccount">切换账号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeAccount(){
				uni.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>

</style>
