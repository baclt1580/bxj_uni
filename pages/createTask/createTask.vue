<template>
	<view class="createTask">
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
			
			<u-form-item label="悬赏金额" prop="money" labelWidth="auto" class="item money">
				<u-input type="number" maxlength="3" v-model="formContent.money" color="#06c2ad">
					<u--text text="元" slot="suffix" margin="0 3px 0 0" type="tips"></u--text>
				</u-input>
			</u-form-item>
			<u-form-item label="标签(可选)" prop="tag" labelWidth="auto" class="item tag">
				<u-input type="text" maxlength="10" v-model="formContent.tag" color="#06c2ad">
				</u-input>
			</u-form-item>
			<u-form-item label="标题" prop="title" labelWidth="auto" class="item title">
				<u-input type="text" maxlength="30" v-model="formContent.title" color="#06c2ad">
				</u-input>
			</u-form-item>
			<u-form-item label="发布人" labelWidth="auto" class="item user">
				<text style="font-size: 36rpx;">{{$store.state.$userInfo.userInfo.nickname}}</text>
			</u-form-item>
			<button type="primary" style="background-color: #06C2AD;" @click="createTask">提交</button>
		</u-form>
	</view>
</template>

<script>
	import {
		createTask
	} from "@/common/bbApis/bbApis.js";
	import {baseUrl} from "@/common/config.js"
	import {delEmpty} from "@/util/utils.js"
	export default {
		
		data() {
			return {
				formContent: {
					content: "",
					money: 0,
					tag: "",
					title: "",
					imgs:[]
				},
				fileList:[],
				rules:{}
			}
		},
		methods: {
			async createTask() {
				
				let obj=this.formContent;
				obj.money=Number(obj.money)
				obj.imgs=this.fileList.map((item)=>item.url_)
				obj=delEmpty(obj);
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
				if(!obj.money&&obj.money!=0){
					console.log(obj.money)
					uni.showToast({
						title:"悬赏不能为空",
						duration:1200,
						icon:"error"
					})
					return;
				}
				if(obj.money<0||obj.money>999){
					uni.showToast({
						title:"悬赏金额为0-999",
						duration:1200,
						icon:"error"
					})
					return;
				}
				if(!obj.title){
					uni.showToast({
						title:"标题不能为空",
						duration:1200,
						icon:"error"
					})
					return;
				}
				if(obj.title.length>30){
					uni.showToast({
						title:"标题最大长度为30",
						duration:1200,
						icon:"error"
					})
					return;
				}
				let res = await createTask(obj);	
				if(res){
					uni.$emit("refreshbb");
					uni.navigateBack({
						complete(){
							uni.showToast({
								title:"发布成功",
								duration:1200
							})
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
						url:baseUrl+"/bangbang/task/img",
						name:"files",
						filePath:url,
						header:{
							Authorization: `Bearer ${this.$store.state.$token}`
						},
						success({data}){
							console.log(data)
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
	.createTask {
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
