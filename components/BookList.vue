<template>
	<view>
		<block v-for="(item,index) in bookList" :key="index">
			<ListHeader>
				<template #title>
					{{ item.headerTitle }}
				</template>
			</ListHeader>
			<block v-for="(mitem,mindex) in item.books" :key="mindex">
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
		</block>
	</view>
	
</template>

<script>
	import ListHeader from "@/components/ListHeader.vue"
	export default{
		props:{
			bookList:{
				type:Array,
				default:()=>[]
			}
		},
		components:{
			ListHeader
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