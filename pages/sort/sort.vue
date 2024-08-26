<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<view class="line cal"></view>
		<view class="left-scroll flex">
			<!-- 左侧 -->
			<scroll-view scroll-y :style="{ height:`${calHeight}rpx` }" class="font scroll text-light-black">
				<block v-for="(item,index) in leftList" :key="index">
					<view class="scroll-item">
						{{ item }}
					</view>
				</block>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y :style="{ height:`${calHeight}rpx` }">
				<block v-for="(item,index) in rightList" :key="index">
					<view>
						<!-- 顶部 -->
						<view></view>
						<view></view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { sortResources } from '@/pages/sort/sortAssets.js'
	import SearchBox from '@/components/SearchBox.vue'
	import tool from '@/common/tool.js'
	
	export default {
		data(){
			return {
				calHeight : 0
			}
		},
		components:{
			SearchBox
		},
		mounted(){
			tool.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success: val => this.calHeight = val
			})
		},
		computed:{
			leftList(){
				return sortResources.map(item => item.text)
			},
			rightList(){
				return sortResources
			}
		}
	}
</script>

<style lang="scss" scoped>
	.line{
		height: 20rpx;
	}
	.left-scroll{
		background-color: #f0f3f8;
	}
	.scroll{
		width: 180rpx;
		padding: 0 20rpx;
		&-item{
			height: 150rpx;
			line-height: 150rpx;
		}
	}
</style>