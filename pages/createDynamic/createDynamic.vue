<template>
	<view class="createDynamic">
		<u-form labelPosition="left" :model="formContent" :rules="rules" class="taskForm" ref="createForm">
			<u-from-item prop="content" ref="item1" class="item content">
				<u--textarea v-model="formContent.content" maxlength="500" placeholder="请输入内容" class="content" count
					border="bottom"></u--textarea>
			</u-from-item>
			<u-from-item class="item upload">
				<u-upload
						:fileList="fileList"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						multiple
						:maxCount="5"
						style="margin-top: 30rpx;"
					></u-upload>
			</u-from-item>
			
			
			
			<button type="primary" style="background-color: #06C2AD;" @click="createDynamic">发布</button>
		</u-form>
	</view>
</template>

<script>
	import {
		createDynamic
	} from "@/common/api.js";
	import {baseUrl} from "@/common/config.js"
	import {delEmpty} from "@/util/utils.js"
	export default {
		data() {
			return {
				formContent: {
					content: "",
					images:[]
				},
				fileList:[],
				rules:{}
			}
		},
		methods: {
			async createDynamic() {
				
				let obj=this.formContent;
				obj.images=this.fileList.map(item=>item.url_)
				if(!obj.content||!obj.content.length){
					uni.showToast({
						title:"内容不能为空",
						duration:1200,
						icon:"error"
					})
					return;
				}
				if(obj.content.length>500){
					uni.showToast({
						title:"内容长度最大为500",
						duration:1200,
						icon:"error"
					})
					return;
				}
				console.log(obj)
				let res = await createDynamic(obj);
				
				if(res){
					uni.navigateBack({
						complete(){
							
							uni.showToast({
								title:"发布成功",
								duration:500
							})
							uni.$emit("refreshDynamic");
						}
					})
				}
				
			},
			afterRead(res){
				let urls=res.file.map(item=>({url:item.url,status:"uploading",message:"上传中"}));
				this.fileList.push(...urls);
				urls.forEach(async (item,index)=>{
					try{
						let res=await this.uploadImgs(item.url);
						item.status="success";
						item.message='';
						item.url_=res.data[0]
						this.fileList.splice(index,1,item);
						
					}catch(e){
						console.log(e)
					}
				
					
				})
			},
			deletePic(res){
				let {index}=res;
				this.fileList.splice(index,1);
			},
			uploadImgs(url){
				return new Promise((_res,_rej)=>{
					uni.uploadFile({
						url:baseUrl+"/dynamic/imgs",
						name:"files",
						filePath:url,
						header:{
							Authorization: `Bearer ${this.$store.state.$token}`
						},
						success({data}){
							_res(JSON.parse(data))
						},
						fail(err){
							_rej(err)
						}
					})
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.createDynamic {
		width: 690rpx;
		margin: 0 auto;
		margin-top: 40rpx;

		.taskForm {
			.item {
				margin-bottom: 30rpx;

				&.content .content {
					height: 300rpx;
					border-bottom: 1px solid #D4D4D4;
					line-height: 50rpx;
				}

				&.money {

					width: 250rpx;
					border-bottom: 1px solid #D4D4D4;
				}

				&.tag {
					width: 500rpx;
					border-bottom: 1px solid #D4D4D4;

				}

				&.title {
					width: 500rpx;
					border-bottom: 1px solid #D4D4D4;

				}

				&.user {
					margin-bottom: 50rpx;
				}
			}

		}

	}
</style>
