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