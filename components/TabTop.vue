<template>
	<view class="flex align-center tab-top border">
		<block v-for="(item,index) in tabArr" :key="index">
			<view class="flex flex-column align-center justify-between tab-top-container" @tap="changeTab(index)">
				<view class="pt-1 text-light-black animated faster" :class="tabIndex == index ? 'font-weight-bold':'pulse'">{{ item }}</view>
				<view class="tab-top-line rounded animated zoomIn faster" v-if="tabIndex === index"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				tabIndex: 0
			}
		},
		props:{
			tabArr:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			changeTab(index){
				this.tabIndex = index
				this.$emit('getTabIndex',this.tabIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
.tab-top{
	justify-content: space-around;
	height: 80rpx;
	&-container{
		height: 80rpx;
	}
	&-line{
		width: 80rpx;
		height: 8rpx;
		background-color: #fb5f39;
	}
}
</style>