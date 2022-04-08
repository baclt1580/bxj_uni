import {getUserInfo} from "./api.js"
import config from "./config.js";
export default {
    data() {
        return {
			config
        }
    },
	methods:{
		async $refreshUserInfo(){
			let userInfo=await getUserInfo();
			if(!!userInfo){
				this.$store.dispatch("setUserInfo",userInfo)
				
			}
		}
	}
}
