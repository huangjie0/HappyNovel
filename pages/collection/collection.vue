<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<TabTop :tab-arr="['我的收藏','收听历史']" @getTabIndex="getTabIndex" class="cal"></TabTop>
		<!-- 具体内容 -->
		<!-- 我的收藏 -->
		<scroll-view scroll-y v-if="tabIndex == 0" :style="{ height:`${calHeight}rpx` }">
			111
		</scroll-view>
		<!-- 收听历史 -->
		<scroll-view scroll-y v-else :style="{ height:`${calHeight}rpx`}">
			222
		</scroll-view>
		
		
		
		
		<!-- <CollectItem></CollectItem> -->
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
			CollectItem,
		}
	}
</script>

<style>
</style>