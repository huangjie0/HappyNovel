<template>
	<view>
		<PageTitle>图片详情</PageTitle>
		<view class="book-details flex align-center py-2">
			<image src="@/static/Rebook/Rebook1.jpg" mode="widthFix" lazy-load class="book-details-image flex-1 mx-2 rounded"></image>
			<view class="flex-2 mx-2">
				<view class="book-details-name">
					西游记
				</view>
				<view class="font mt-1">
					作者：吴承恩
				</view>
				<view class="flex align-center mt-2">
					<button class="flex-1 mx-2">分享</button>
					<button class="flex-1 mx-2">收藏</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import PageTitle from '@/components/PageTitle.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			PageTitle
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.book-details{
	background-color: #a8b0c3;
	height: 250rpx;
	&-image{
		
	}
	&-name{
		font-size: 45rpx;
	}
}
</style>
