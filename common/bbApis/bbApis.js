const { http } = uni.$u
export const getTasks=({
	pageSize,
	page,
	searchStr
})=>http.get("/bangbang",{
	params:{
		pageSize,
		page,
		searchStr
	}
})
export const getTaskById=({id})=>http.get(`bangbang/${id}`)
export const getReciverCount=()=>http.get("bangbang/count/recived")
export const getPubCount=()=>http.get("bangbang/count/pub")
export const getUserTasks=({id,pageSize,page})=>http.get(`bangbang/user/${id}`,{
	params:{pageSize,page}
})
//发布任务
export const createTask=({title,content,imgs,money,tag})=>http.post('bangbang',{title,content,imgs,money,tag});
export const getRecivedTask=({pageSize,page})=>http.get('bangbang/task/recived',{params:{pageSize,page}});
//接受任务
export const receiveTask=({id})=>http.put(`bangbang/${id}/receiver`)
export const receiverConfirm=({id,remarks})=>http.put(`bangbang/${id}/confirmComplete`,{remarks})
export const senderConfirm=({id})=>http.put(`bangbang/${id}/complete`)
export const reciverCancelRecive=({id})=>http.delete(`bangbang/${id}/receiver`)
export const reciverCancelConfirm=({id})=>http.put(`bangbang/${id}/cancelConfirm`)
export const rejectComplete=({id,remarks})=>http.put(`bangbang/${id}/rejectComplete`,{remarks})
export const deleteTask=({id})=>http.delete(`bangbang/${id}`)