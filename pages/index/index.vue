<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
	</view>
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
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
				]
			}
		},
		onLoad() {

		},
		components:{
			SearchBox,
			RotationChart
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
