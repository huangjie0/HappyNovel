<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
		<FunctionSort :function-sort="functionSort"></FunctionSort>
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
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
	import FunctionSort from "@/components/FunctionSort.vue"
	import ListHeader from "@/components/ListHeader.vue"
	export default {
		data() {
			return {
				imgArr:[
					{
						src:"/static/swiperImages/image.jpg"
					},
					{
						src:"/static/swiperImages/image1.jpg"
					},
					{
						src:"/static/swiperImages/image3.jpg"
					},
					{
						src:"/static/swiperImages/image4.jpg"
					},
				],
				 functionSort:[
					 {
						 iconId:'icon-icon-test',
						 iconColor:'text-warning',
						 name:'看榜单'
					 },
					 {
						 iconId:'icon-startRead',
						 iconColor:'text-hover-primary',
						 name:'听小说'
					 },
					 {
						 iconId:'icon-icon09',
						 iconColor:'text-light-black',
						 name:'听音乐'
					 },
					 {
						 
						 iconId:'icon-zhishi',
						 iconColor:'text-success',
						 name:'听知识'
						 
					 }
				 ],
				 rebooks:[
					 {
						 id:1,
						 name:'西游记',
						 src:'/static/guessLike/333.jpg'
					 },
					 {
						 id:2,
						 name:'贺兰山志',
						 src:'/static/guessLike/444.jpg'
					 },
					 {
						 id:3,
						 name:'水浒传',
						 src:'/static/guessLike/111.jpg'
					 },
					 {
						 id:4,
						 name:'文城',
						 src:'/static/guessLike/222.jpg'
					 }
				 ]
			}
		},
		onLoad() {

		},
		components:{
			SearchBox,
			RotationChart,
			FunctionSort,
			ListHeader
		},
		methods: {

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
