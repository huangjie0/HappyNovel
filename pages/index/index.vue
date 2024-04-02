<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
		<FunctionSort :function-sort="functionSort"></FunctionSort>
		<Recommond :rebooks="rebooks"></Recommond>
		<block v-for="(item,index) in bookResources" :key="index">
			<ListHeader>
				<template #title>
					{{ item.headerTitle }}
				</template>
			</ListHeader>
			<block v-for="(mitem,mindex) in item.books" :key="mindex">
				<view class="books border-bottom">
					<image :src="mitem.imgurl" mode="aspectFill" class="books-image rounded"></image>
				</view>
			</block>
		</block>
	</view> 
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
	import FunctionSort from "@/components/FunctionSort.vue"
	import Recommond from "@/components/compound/Recommond.vue"
	import ListHeader from "@/components/ListHeader.vue"
	export default {
		data() {
			return {
				imgArr:[
					{
						src:"/static/swiperImages/swipertab1.png"
					},
					{
						src:"/static/swiperImages/swipertab2.png"
					},
					{
						src:"/static/swiperImages/swipertab3.png"
					},
					{
						src:"/static/swiperImages/swipertab4.png"
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
						 src:'/static/Rebook/Rebook1.jpg'
					  },
					  {
						 id:2,
						 name:'贺兰山志',
						 src:'/static/Rebook/Rebook2.jpg'
					  },
					  {
						 id:3,
						 name:'水浒传',
						 src:'/static/Rebook/Rebook3.jpg'
					  }
				 ],
				 bookResources:[
					 {
						headerTitle:"人文"
					 },
					 {
						headerTitle:"历史"
					 },
					 {
						headerTitle:"音乐"
					 },
					 {
						headerTitle:"艺术"
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
			Recommond,
			ListHeader
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.books{
		height: 320rpx;
		&-image{
			width: 300rpx;
			height: 250rpx;
		}
		
	}
</style>
