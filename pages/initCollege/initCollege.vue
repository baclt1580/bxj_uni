<template>
	<view class="initCollege">
		<div class="container">
			<div class="text">
				输入你所在的学校
			</div>
			
				<u-input
					placeholder="校名"
					border="bottom"
					class="collegeInput"
					color="#06c2ad"
					v-model="collegeName"
					@focus="inputFocus=true"
					@blur="inputFocus=false"
					@change="collegeChange"
			  >
				</u-input>
				<u-list height="400rpx" class="collegeList" :showScrollbar="true" v-show="showList">
					<u-list-item class="collegeListItem" v-for="name in collegeList" :key="name">
						<u-cell  @click="collegeName=name" clickable>
							<template slot="title">
								<view style="color:#626675">{{name}}</view>
							</template>
						</u-cell>
						
					</u-list-item>
				</u-list>
				<div class="bottom">
				  <div class="nextTick" :class="{disable:!collegeName||collegeName.length<2}" @click="changeCollege">
					  下一步
				  </div>
				</div>
				
			
			
		  
		</div>
		
	</view>
</template>

<script>
	import {getCollages,changeCollege,getUserInfo} from "@/common/api.js"
	import {debounce} from "lodash";
	export default {
		data() {
			return {
				collegeName:null,
				inputFocus:false,
				collegeList:[]
			};
		},
		methods: {
			async changeCollege(){
				let {collegeName}=this;
				if(collegeName&&collegeName.length>2){
					let res=await changeCollege({collegeName})
					if(res){
						await this.$refreshUserInfo()
						uni.$u.toast("设置成功")
					}
				}else{
					uni.$u.toast("学校名称错误")
				}
			},
			collegeChange(keywords){
				return debounce(this._collegeChange,200)(keywords)
			},
			async _collegeChange(keywords) {
				console.log("查询")
				if(keywords&&keywords.length>=2){
					let res=await getCollages({
						keywords
					})
					if(!res.length){
						this.collegeList=["未找到相关学校"]
					}
					else if(res.length>5){
						this.collegeList=["请再多补全一些校名"]
					}else{
						this.collegeList=res.map(obj=>obj.collegeName)
					}
					
				}
				
			}
		},
		computed:{
			showList(){
				return this.inputFocus&&this.collegeName&&this.collegeName.length>=2&&this.collegeList.length>0
			}
		}
		
	}
</script>

<style lang="scss">
	.initCollege{
		min-height: 100vh;
		background-color: #fff;
		display:flex;
		justify-content: center;
		align-items: center;
		.container{
			width:600rpx;
			margin-top: -200rpx;
			.text{
				margin:0 auto;
				text-align: center;
				color:$mainColor;
				font-size: 40rpx;
			}
			
				
			.collegeInput{
				margin-top:60rpx;
				border-bottom: 2rpx solid $mainColor;
				
			}
			.collegeList{
				width:600rpx;
				background-color: #fff;
				position: absolute;
				.collegeListItem{
					color:red;
				}
			}
			
			
			.bottom{
				margin-top: 80rpx;
				display: flex;
				justify-content: center;
				.nextTick{
					font-size: 36rpx;
					color:$mainColor;
					&.disable{
						color:#C0C4CC;
					}
				}
			}
		}
		
	}
</style>
