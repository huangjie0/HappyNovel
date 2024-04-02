<template>
	<view>
		<ListHeader>
			<template #title>猜你喜欢</template>
			<template #tips>更多推荐</template>
		</ListHeader>
		<view class="flex align-center">
			<block v-for="(item,index) in rebooks" :key="index" class="rebook-image">
				<view class="flex-1 rebook-image flex-column flex align-center position-relative">
					<image :src="item.src" class="rebook-image"></image>
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
		data(){
			return{
				// rebooks:[
				//  {
				// 	 id:1,
				// 	 name:'西游记',
				// 	 src:'/static/guessLike/333.jpg'
				//  },
				//  {
				// 	 id:2,
				// 	 name:'贺兰山志',
				// 	 src:'/static/guessLike/444.jpg'
				//  },
				//  {
				// 	 id:3,
				// 	 name:'水浒传',
				// 	 src:'/static/guessLike/111.jpg'
				//  },
				//  {
				// 	 id:4,
				// 	 name:'文城',
				// 	 src:'/static/guessLike/222.jpg'
				//  }
				// ]
			}
		},
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
		width: 130rpx;
		height: 220rpx;
		.er-ji{
			left: 40rpx;
			top: 10rpx;
		}
	}
</style>