<script>
	import {initToken} from "@/util/utils.js"
	export default {
		onLaunch:async function() {
			initToken()
			await this.$refreshUserInfo()
			plus.navigator.closeSplashscreen()
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/demo.scss";
	*{
		box-sizing: border-box;
	}
</style>
