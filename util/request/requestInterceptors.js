/**
 * 请求拦截
 * @param {Object} http
 */
import store from "@/store/index.js"
module.exports = (vm) => {
    uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        config.data = config.data || {}
		let token=store.state.$token
		if(token){
			config.header.Authorization=`Bearer ${token}`;
		}
        // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
        // console.log(vm.$store.state);
        return config
    }, (config) => // 可使用async await 做异步操作
        Promise.reject(config))
}
