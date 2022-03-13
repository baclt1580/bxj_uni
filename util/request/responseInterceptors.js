/**
 * 响应拦截
 * @param {Object} http 
 */
module.exports = (vm) => {
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data
        return data.data || {}
    }, (response) => { 
		const {statusCode,data}= response;
		if(data?.message){
			let message=typeof data.message=="string"?data.message:data.message[0];
			uni.$u.toast(message)
		}else{
			uni.$u.toast("未知错误")
		}
		console.log("响应拦截",statusCode,data)
    })
}