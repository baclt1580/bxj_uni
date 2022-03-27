const { http } = uni.$u
export const getTasks=({
	pageSize,
	page
})=>http.get("/bangbang",{
	params:{
		pageSize,
		page
	}
})
export const getReciverCount=()=>http.get("bangbang/count/recived")
export const getPubCount=()=>http.get("bangbang/count/pub")
export const getUserTasks=({id,pageSize,page})=>http.get(`bangbang/user/${id}`,{
	params:{pageSize,page}
})
export const createTask=({title,content,imgs,money,tag})=>http.post('bangbang',{title,content,imgs,money,tag});
