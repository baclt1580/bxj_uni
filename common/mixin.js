import {getUserInfo} from "./api.js"
export default {
    data() {
        return {
			
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
