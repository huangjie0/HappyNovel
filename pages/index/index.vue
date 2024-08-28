<template>
	<view>
		<SearchBox></SearchBox>
		<RotationChart :image-list="imgArr"></RotationChart>
		<FunctionSort :function-sort="functionSort"></FunctionSort>
		<Recommond :rebooks="rebooks"></Recommond>
		<block v-for="(item,index) in bookResources" :key="index">
			<ListHeader>
				<template v-slot:title>
					{{ item.headerTitle }}
				</template>
			</ListHeader>
			<BookList :book-list="item.books"></BookList>
		</block>
		<MyAudio></MyAudio>
		<!-- 占位符号 -->
		<view class="placeholder"></view>
	</view>
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import RotationChart from "@/components/RotationChart.vue"
	import FunctionSort from "@/components/FunctionSort.vue"
	import Recommond from "@/components/compound/Recommond.vue"
	import ListHeader from "@/components/ListHeader.vue"
	import BookList from "@/components/BookList.vue"
	import MyAudio from "@/components/MyAudio.vue"
import { log } from 'util'
	export default {
		data() {
			return {
				imgArr: [],
				functionSort: [{
						iconId: 'icon-icon-test',
						iconColor: 'text-warning',
						name: '看榜单'
					},
					{
						iconId: 'icon-startRead',
						iconColor: 'text-hover-primary',
						name: '听小说'
					},
					{
						iconId: 'icon-icon09',
						iconColor: 'text-light-black',
						name: '听音乐'
					},
					{

						iconId: 'icon-zhishi',
						iconColor: 'text-success',
						name: '听知识'

					}
				],
				rebooks: [],
				bookResources: [],
			}
		},
		onLoad() {
			this.$http.get('/app_index').then((res)=>{
				this.imgArr = res.swiperImages
				this.rebooks = res.Rebooks
				this.bookResources = res.bookResources
			})
		},
		components: {
			SearchBox,
			RotationChart,
			FunctionSort,
			Recommond,
			ListHeader,
			BookList,
			MyAudio
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.placeholder{
	height: 160rpx;
}
</style>