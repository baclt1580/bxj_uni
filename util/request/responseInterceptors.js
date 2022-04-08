/**
 * 响应拦截
 * @param {Object} http 
 */
module.exports = (vm) => {
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data
        return data.data || null
    }, (response) => { 
		const {statusCode,data}= response;
		
		if(statusCode==400){
			console.log("toast")
			if(Array.isArray(data.message)){
				uni.showToast({
					title:data.message[0],
					duration:800,
					icon:"error",
					fail(e){
						console.log(e)
					}
				})
			}else{
				uni.showToast({
					title:data.message,
					duration:800,
					icon:"error",
					fail(e){
						console.log(e)
					}
				})
			}
		}
		
    })
}