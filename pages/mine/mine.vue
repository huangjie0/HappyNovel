<template>
	<view>
		<view class="flex align-center justify-between mine-container px-2">
			<!-- 用户 -->
			<view class="flex align-center">
				<image src="@/static/user/user.jpg" mode="aspectFill" class="user-image"></image>
				<text class="px-2">麦3</text>
			</view>
			<!-- 客服 -->
			<view class="customer-service flex align-center rounded-circle p-1">
				<icon icon-id="icon-erji" icon-size="30" class="px-1"></icon>
				<text class="font">我的客服</text>
			</view>
		</view>
		
		<block v-for="(item,index) in myFunctionList" :key="index">
			<view>
				<view class="flex align-center justify-between px-2 mine-item text-light-black">				
					<text>{{ item }}</text>
					<icon icon-id="icon-iconfonti"></icon>
				</view>
				<view class="parting-line"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				myFunctionList:["签到","设置","意见反馈","切换账号"]
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-image{
		width: 130rpx;
		height: 130rpx;
		border-radius: 100%;
		.customer-service{
			background-color: #ecf0f3;
		}
	}
	.mine-container{
		height: 200rpx;
	}
	
	.parting-line{
		height: 12rpx;
		background-color: #F8F8F8;
	}
	.mine-item{
		height: 90rpx;
	}
</style>