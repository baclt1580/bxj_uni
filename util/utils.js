import store from "@/store"
export function getWindowHeight(){
	return new Promise(res=>{
		uni.getSystemInfo({
			success:({safeArea})=>{
				res(safeArea.height)
			}
		});
	})
	
}
export function getDomRect(vm,queryStr){
	const query = uni.createSelectorQuery().in(vm);
	return new Promise(res=>{
		query.select(queryStr).boundingClientRect(data => {
		  res(data)
		}).exec();
	})
	
}
export function initToken(){
	let token=uni.getStorageSync("token");
	let expiresIn=uni.getStorageSync("expiresIn");
	if(token&&expiresIn-Date.now()>60000*10){
		console.log("ex",expiresIn-Date.now())
			store.dispatch("setToken",token)
			store.dispatch("setExpiresIn",expiresIn)
			let userInfo=uni.getStorageSync("userInfo");
			if(!userInfo?.userInfo?.collegeName){
				console.log("跳转到college")
				uni.reLaunch({
					url:"./pages/initCollege/initCollege",
					complete(){
						
					}
				})
			}else{
				console.log("跳转到index")
				uni.reLaunch({
					url:"./pages/index/index",
					fail(e) {
						console.log(e)
					},
					complete(){
					}
				})
			}
			
	}else{
		plus.navigator.closeSplashscreen()
	}
	
}