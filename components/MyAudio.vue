<template>
	<view class="fixed-bottom audi-container mx-2 mb-1 rounded">
		<!-- 进度部分 -->
		<view class="flex align-center justify-center font audi-slider">
			<!-- 总时长 -->
			<view>00:00</view>
			<!-- 进度条部分 -->
			<view class="slider-container">
				<slider block-size="16" active-color="#e48267" background-color="#eef2f3"/>
			</view>
			<!-- 当前播放时刻 -->
			<view>00:00</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.audi-container{
		height: 160rpx;
		background-color: #d1ccc0;
		opacity: 0.9;
		.audi-slider{
			color: #7a8388;
		}
		.slider-container{
			width: 500rpx;
		}
	}
</style>