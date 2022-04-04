const { http } = uni.$u
// 获取菜单
export const test=()=>http.get()
export const authByUsername = ({username,password}) => http.get('/auth/username', {
	params:{
		username,
		password
	}
})
export const authByPhone= ({phone,phoneCode}) => http.get('/auth/phone', {
	params:{phone,phoneCode}
})
export const getUserInfo=()=>http.get("/user")

export const getCollages=({keywords})=>http.get("user/colleges",{
	params:{
		keywords
	}
})
export const changeCollege=({collegeName})=>http.put("user/college",{
	collegeName
})
export const createDynamic=({content,images})=>http.post("dynamic",{
	content,images
})
export const getDynamic=({pageSize,page})=>http.get("dynamic",{params:{pageSize,page}})
export const getDynamicById=({id})=>http.get(`dynamic/${id}`)
export const getUserDynamics=({pageSize,page})=>http.get(`dynamic/user/dynamics`,{params:{pageSize,page}})
export const createReply=({id,content})=>http.post(`dynamic/${id}/reply`,{content})
export const getReply=({id,pageSize,page})=>http.get(`dynamic/${id}/reply`,{params:{pageSize,page}})