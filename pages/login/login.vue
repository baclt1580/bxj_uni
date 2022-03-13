<template>
	<view class="login">
		<div class="logo">
			<image src="./assets/logo.png" mode="widthFix" style="width: 350rpx;"></image>
		</div>
		<u-form class="loginForm"
					:model="userInfo"
						:rules="rules"
						ref="loginForm"
		>
			<u-form-item
				prop="phone"
				ref="item1"
				class="phoneItem"
			>
				<u-input
						v-model="userInfo.phone"
						placeholder="手机号"
						shape="circle"
						type="number"
						maxlength="11"
						class="phoneInput"
						prefixIcon="phone"
						prefixIconStyle="color:#888"
				></u-input>
			</u-form-item>
			<u-form-item
				prop="code"
				ref="item1"
				class="codeItem"
			>
				<u-input
						v-model="userInfo.code"
						placeholder="验证码"
						shape="circle"
						type="number"
						maxlength="6"
						class="codeInput"
						prefixIcon="email"
						prefixIconStyle="color:#888"
				></u-input>
				<text class="getCode" @click="getCode">
					{{!codeInfo.restTime?"获取验证码":codeInfo.restTime+"s"}}
					</text>
				
			</u-form-item>
			
		</u-form>
		<u-button type="primary" :plain="true" text="登录" class="loginBtn" shape="circle" @click="login" :loading="isLogining" loadingText="正在登录"></u-button>
	</view>
</template>

<script>
	import {authByUsername,authByPhone,getUserInfo} from "@/common/api.js"
	import {initToken} from "@/util/utils.js"
	export default {
		onReady(){
			// initToken()
		},
		data() {
			return {
				isLogining:false,
				userInfo:{
					phone:null,
					code:null
				},
				codeInfo:{
					restTime:0
				},
				rules:{
					"phone":{
						validator(rule,value,cb){
							return uni.$u.test.mobile(value);
						},
						required:true,
						message:"手机号格式错误",
						trigger: ['blur']
					},
					"code":{
						validator(rule,value,cb){
							return uni.$u.test.code(value,6);
						},
						required:true,
						message:"验证码错误",
						trigger: ['blur']
					}
				}
			}
		},
		methods: {
			async login(){
				try{
					this.isLogining=true;
					await this.$refs.loginForm.validate()
					let {phone,code:phoneCode}=this.userInfo;
					let res=await authByPhone({phone,phoneCode})
					let token=res?.token;
					let expiresIn=res?.expiresIn;
					if(token){
						this.$store.dispatch("setToken",token)
						this.$store.dispatch("setExpiresIn",Date.now()+expiresIn)
						uni.$u.toast("登录成功")
						let info=await getUserInfo();
						if(!!info){
							this.$store.dispatch("setUserInfo",info)
							if(!info.userInfo.collegeName){
								uni.$u.toast("未设置学校")
								uni.reLaunch({
									url:"../initCollege/initCollege"
								})
							}else{
								uni.reLaunch({
									url:"../index/index"
								})
							}
						}
					}
					
				}catch(e){
					console.log(e)
					uni.$u.toast("手机号或验证码填写错误")
				}
				this.isLogining=false;
				
			},
			async getCode(){
				//发送验证码,由于后端无短信接口,暂未实现
				let res=uni.$u.test.mobile(this.userInfo.phone)
				if(!res) return this.$refs.loginForm.validateField("phone");
				uni.$u.toast("发送成功")
				this.codeInfo.restTime=60;
				let interval=setInterval(()=>{
					if(!--this.codeInfo.restTime){
						this.codeInfo.restTime=0;
						clearInterval(interval)
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		$inputHeight:50rpx;
		background-color: $mainColor;
		min-height: 100vh;
		.logo{
			padding-top: 160rpx;
			margin:0 auto;
			text-align: center;
		}
		.loginForm{
			width:650rpx;
			margin:0 auto;
			margin-top: 60rpx;
			.phoneItem{
				.phoneInput{
					color:$fontColor;
					height: $inputHeight;
					background-color: #ecf0f1;
				}
			}
			.codeItem{
				width:500rpx;
				.codeInput{
					color:$fontColor;
					height: $inputHeight;
					background-color: #ecf0f1;
				}
				.getCode{
					width:150rpx;
					margin-left: 20rpx;
					color:#ecf0f1;
					font-size: 28rpx;
				}
			}
			
			
		}
		.loginBtn{
			margin-top: 20rpx;
			width:600rpx;
			height:80rpx;
			font-size: 32rpx;
			
		}
	}
</style>
