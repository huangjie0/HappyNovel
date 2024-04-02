<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
		<FunctionSort :function-sort="functionSort"></FunctionSort>
		<ListHeader>
			<template #title>猜你喜欢</template>
			<template #tips>更多推荐</template>
		</ListHeader>
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
	
</style>
