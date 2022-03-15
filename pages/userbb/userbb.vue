<template>
	<view class="userbb">
		<div class="info">
			<div class="infoItem">
				<div class="value">
					{{reciverCount}} <span class="company">单</span>
				</div>
				<div class="title">已接</div>
			</div>
			<div class="infoItem">
				<div class="value">
					{{pubCount}} <span class="company">单</span>
				</div>
				<div class="title">已发布</div>
			</div>
		</div>
	</view>
</template>

<script>
	import {getReciverCount,getPubCount} from "@/common/bbApis/bbApis.js"
	export default {
		async created(){
			this.reciverCount=(await getReciverCount()).count;
			this.pubCount=(await getPubCount()).count;
		},
		data() {
			return {
				reciverCount:0,
				pubCount:0,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.userbb{
		.info{
			height: 300rpx;
			background-color: $mainColor;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding:0 60rpx;
			.infoItem{
				
			// border:1rpx solid red;
				.value{
					color:#fff;
					font-size: 64rpx;
					.company{
						font-size: 32rpx;
						vertical-align: top;
					}
					
				}
				.title{
					margin-top: 10rpx;
					color:#fff;
					text-align: center;
				}
			}
		}
		
	}

</style>
