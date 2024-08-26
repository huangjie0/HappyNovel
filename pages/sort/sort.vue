<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<view class="line cal"></view>
		<view class="left-scroll flex">
			<!-- 左侧 -->
			<scroll-view scroll-y :style="{ height:`${calHeight}rpx` }" class="font scroll text-light-black">
				<block v-for="(item,index) in leftList" :key="index">
					<view class="scroll-item animated faster" @tap="changeLeftList(index)" :class="leftIndex === index ? 'left-active pulse font-weight-bold' : ''">
						{{ item }}
					</view>
				</block>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y :scroll-into-view="rightIndex" scroll-with-animation :style="{ height:`${calHeight}rpx` }" @scroll="changeRightList">
				<block v-for="(item,index) in rightList" :key="index">
					<view class="right-list-item" :id="`right${index}`">
						<!-- 顶部 -->
						<view class="right-list-item-top flex justify-center">
							<text class="mr-1">{{ item.text }}</text>
							<icon icon-id="icon-youjiantou" icon-size="40"></icon>
						</view>
						<view class="right-list-item-bottom bg-white font flex flex-wrap rounded">
							<block v-for="(mitem,mindex) in item.content" :key="mindex">
								<view class="right-list-item-content flex justify-center align-center">{{ mitem }}</view>
							</block>
						</view>
					</view>
				</block>
				<!-- 占位符 -->
				<view :style="{ height:`${calHeight - 320}rpx` }"></view>
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
				calHeight : 0,
				rightIndex : `right${0}`,
				leftIndex: 0
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
		methods:{
			changeLeftList(id){
				this.rightIndex = `right${id}`
			},
			changeRightList(e){
				let curScollTop = e.detail.scrollTop
				let standardVal = tool.Topx(320)
				let curIndex = Math.round(curScollTop / standardVal)
				this.leftIndex = curIndex
			}
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
	.right-list-item{
		height: 250rpx;
		margin-bottom: 70rpx;
		&-content{
			width: calc(100% / 3);
		}
		&-top{
			height: 80rpx;
		}
		&-bottom{
			height: 170rpx;
		}
	}
	.left-active{
		color: #f7646d;
	}
</style>