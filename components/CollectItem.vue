<template>
	<view>
		<view class="books-container border-bottom flex align-center p-1">
			<image :src="bookImgUrl" mode="aspectFill" class="books-image rounded mx-2"></image>
			<view class="books-text flex-1">
				<view class="py-1 font-md font-weight-bold">
					{{ bookName }}
				</view>
				<view class="font text-light-black">
					{{ bookSynopsis }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"CollectItem",
		data() {
			return {
				
			};
		},
		props:{
			bookImgUrl: {
				type:String,
				default:''
			},
			bookName:{
				type:String,
				default:''
			},
			bookSynopsis:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scope lang="scss">
	.books-container{
		height: 250rpx;
		.books-image{
			width: 220rpx;
			height: 220rpx;
		}
		.books-text{
			height: 100%;
		}
	}
</style>