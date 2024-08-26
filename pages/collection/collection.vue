<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<TabTop :tab-arr="['我的收藏','收听历史']" @getTabIndex="getTabIndex" class="cal"></TabTop>
		<!-- 具体内容 -->
		<!-- 我的收藏 -->
		<scroll-view scroll-y v-if="tabIndex == 0" :style="{ height:`${calHeight}rpx` }">
			<CollectItem :book-img-url="test.imgurl" :book-name="test.name" :book-synopsis="test.synopsis"></CollectItem>
		</scroll-view>
		<!-- 收听历史 -->
		<scroll-view scroll-y v-else :style="{ height:`${calHeight}rpx`}">
			<view></view>
		</scroll-view>
	</view>
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import TabTop from '@/components/TabTop.vue'
	import CollectItem from '@/components/CollectItem.vue'
	import tool from '@/common/tool.js'
	
	export default {
		data(){
			return {
				tabIndex:0,
				calHeight:0,
				test:{
					id: 1000,
					name: '《朝花夕拾》',
					synopsis: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文...',
					imgurl: '/static/indexListImg/indexListImg4.png'
				}
			}
		},
		methods:{
			getTabIndex(index){
				this.tabIndex = index
			},
		},
		mounted(){
			tool.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:val => this.calHeight = val
			})
		},
		components:{
			SearchBox,
			TabTop,
			CollectItem
		}
	}
</script>

<style>
</style>