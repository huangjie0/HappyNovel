<template>
	<view>
		<block v-for="(mitem,mindex) in bookList" :key="mindex">
			<view class="books-container border-bottom flex align-center p-1" hover-class="bg-light">
				<image :src="mitem.imgurl" mode="aspectFill" class="books-image rounded mx-2"></image>
				<view class="books-text flex-1">
					<view class="py-2 font-md font-weight-bold">
						{{ mitem.name }}
					</view>
					<view class="font text-light-black">
						{{ mitem.synopsis }}
					</view>
				</view>
			</view>
		</block>
	</view>
	
</template>

<script>
	export default{
		props:{
			bookList:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.books-container{
		height: 320rpx;
		.books-image{
			width: 250rpx;
			height: 250rpx;
		}
		.books-text{
			height: 100%;
		}
	}
</style>