<template>
	<view class="index">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="./assets/image.png" mode="widthFix" style="width:750rpx"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="./assets/image.png" mode="widthFix" style="width:750rpx"></image>
				</view>
			</swiper-item>
		</swiper>
		<div class="switchTab">
			<div class="tabItem" :class="{active:activeTab==1}" @click="activeTab=1">本校</div>
			<div class="tabItem" :class="{active:activeTab==2}" @click="activeTab=2">我的</div>
		</div>
		<myDynamic :listHeight="listHeight" :activeTab="activeTab"></myDynamic>
	</view>
</template>

<script>
	
	import myDynamic from "./components/myDynamic.vue"
	import {getDomRect,getWindowHeight} from "@/util/utils.js"
	export default {
		async onReady() {
			let windowHeight=await getWindowHeight();
			let {bottom}=await getDomRect(this,".switchTab");
			this.listHeight=(windowHeight-bottom)+"px";
		},
		data() {
			return {
				listHeight: null,
				activeTab:1
			}
		},
		methods:{
			
		},
		components:{
			myDynamic
		}
		
	}
</script>

<style lang="scss" scoped>
	.index{
		
		color:$fontColor;
		.swiper{
			height:300rpx;
			.swiper-item{
				position: relative;
				image{
					position: absolute;
					top:0;
					left:0;
					z-index: -1;
				}
			}
		}
		.switchTab{
			display: flex;
			color:$mainColor;
			justify-content: center;
			margin-top:20rpx;
			font-size: 36rpx;
			.tabItem{
				margin-left: 60rpx;
				color: #DADBDE;
				&:first-child{
					margin-left: 0;
				}
				&.active{
					color: $mainColor;
					position: relative;
					&::after{
						content: "";
						display: block;
						width:100%;
						position: absolute;
						bottom:-5rpx;
						border-top: 1rpx solid $mainColor;
					}
				}
			}
		}
		
	}
</style>
