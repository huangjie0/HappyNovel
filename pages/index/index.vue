<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
		<FunctionSort :function-sort="functionSort"></FunctionSort>
		<Recommond :rebooks="rebooks"></Recommond>
		<block v-for="(item,index) in bookResources" :key="index">
			
			
		</block>
	</view> 
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
	import FunctionSort from "@/components/FunctionSort.vue"
	import Recommond from "@/components/compound/Recommond.vue"
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
			Recommond
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
