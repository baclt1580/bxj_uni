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
			<div class="tabItem" :class="{active:currentComponent=='dynamic'}" @click="currentComponent='dynamic'">本校</div>
			<div class="tabItem" :class="{active:currentComponent=='myDynamic'}" @click="toMynamic">我的</div>
		</div>
		<dynamic v-show="currentComponent=='dynamic'"  :listHeight="listHeight"></dynamic>
		<myDynamic v-show="currentComponent=='myDynamic'" v-if="showedMyDynamic" :listHeight="listHeight"></myDynamic>
			
	</view>
</template>

<script>
	import dynamic from "./components/dynamic.vue"
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
				currentComponent:"dynamic",
				showedMyDynamic:false
			}
		},
		methods:{
			toMynamic(){
				//上来就渲染myDynamic的话因为v-show为false会导致readMore样式错误
				this.showedMyDynamic=true;
				this.currentComponent='myDynamic';
			}
		},
		components:{
			dynamic,
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
