<template>
	<view class="flex align-center tab-top border">
		<block v-for="(item,index) in tabArr" :key="index">
			<view class="flex flex-column align-center justify-between tab-top-container">
				<view>{{ item }}</view>
				<view class="tab-top-line rounded"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			tabArr:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
.tab-top{
	justify-content: space-around;
	height: 60rpx;
	&-container{
		height: 60rpx;
	}
	&-line{
		width: 60rpx;
		height: 6rpx;
		background-color: #fb5f39;
	}
}
</style>