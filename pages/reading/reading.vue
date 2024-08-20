<template>
	<view>
		<!-- 设置开始 -->
		<view class="fixed-top bg-white shadow animated" hover-class="slideInDown">
			<view class="reading-container flex align-center">
				<icon icon-id="icon-jiantou-copy px-2"></icon>
				<text>{{ novalName }} </text>
				<text class="px-2 font-sm text-ellipsis flex-1">章节：{{ chapterCatalog[0].title }}</text>
			</view>
		</view>
		<!-- 设置结束 -->
		<!-- 中间内容区域 -->
		
		
		<!-- 设置底部部分 -->
		<view class="reading-bottom flex align-center fixed-bottom bg-white shadow font animated" hover-class="slideInUp">
			<view class="flex-1 flex flex-column align-center">
				<icon icon-id="icon-xueyuan-mulu" icon-size="55"></icon>
				<view>目录</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<icon icon-id="icon-yanjing" icon-size="55"></icon>
				<view>夜间模式</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<icon icon-id="icon-ziti1" icon-size="55"></icon>
				<view>字体</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<icon icon-id="icon-diqiuhuanqiu" icon-size="55"></icon>
				<view>更多</view>
			</view>
		</view>
	</view>
</template>

<script>
	import test from '@/common/test.js'
	import tool from '@/common/tool.js'
	export default {
		data() {
			return {
				novalName:test.name,  //小说姓名
				chapterCatalog:test.chapterCatalog,  //小说目录
				calHeight:0
			}
		},
		methods: {
			
		},
		onLoad(e){
			console.log(e);
		}
	}
</script>

<style lang="scss" scoped>
.reading-container{
	height: 80rpx;
}

.reading-bottom{
	height: 200rpx;
}

</style>
