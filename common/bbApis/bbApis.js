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