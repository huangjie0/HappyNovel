<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart></RotationChart>
	</view>
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
	export default {
		data() {
			return {
				
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
