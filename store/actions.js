
export default {
	setToken({commit},token){
		uni.setStorageSync("token",token)
		commit("setToken",token)
	},
	removeToken({commit}){
		uni.removeStorageSync("token")
		commit("removeToken")
	},
	setUserInfo({commit},userInfo){
		uni.setStorageSync("userInfo",userInfo)
		console.log(uni.getStorageSync("userInfo"))
		commit("setUserInfo",userInfo)
	},
	setExpiresIn({commit},expiresIn){
		uni.setStorageSync("expiresIn",expiresIn)
		commit("setExpiresIn",expiresIn)
	}
	
}
