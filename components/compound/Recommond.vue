<template>
	<view>
		<ListHeader>
			<template #title>猜你喜欢</template>
			<template #tips>更多推荐</template>
		</ListHeader>
		<view class="flex align-center">
			<block v-for="(item,index) in rebooks" :key="index" class="rebook-image">
				<view class="flex-1 rebook-image flex-column flex align-center position-relative">
					<image :src="item.src" class="rebook-image" mode="aspectFill"></image>
					<text class="font my-1 text-light-black">{{ item.name }}</text>
					<icon icon-id="icon-erji" icon-color="text-light-white" icon-size="30" class="position-absolute er-ji"></icon>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import ListHeader from "@/components/ListHeader.vue"
	export default{
		components:{
			ListHeader
		},
		props:{
			rebooks:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rebook-image{
		width: 200rpx;
		height: 300rpx;
		.er-ji{
			left: 50rpx;
			top: 10rpx;
		}
	}
</style>