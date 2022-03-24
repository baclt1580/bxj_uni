<script>
	import {initToken} from "@/util/utils.js"
	import config from "@/common/config.js"
	export default {
		onLaunch:async function() {
			this.$config=config;
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
