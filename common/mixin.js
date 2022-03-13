import {getUserInfo} from "./api.js"
export default {
    data() {
        return {
			$config:{
				commentPageSize:6
			}
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
