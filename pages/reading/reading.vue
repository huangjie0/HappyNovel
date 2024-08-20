<template>
	<view>
		<!-- 占位 -->
		<view class="cal"></view>
		<!-- 设置开始 -->
		<view class="fixed-top bg-white shadow animated slideInDown" v-if="setStatus">
			<view class="reading-container flex align-center">
				<icon icon-id="icon-jiantou-copy px-2"></icon>
				<text>{{ novalName }} </text>
				<text class="px-2 font-sm text-ellipsis flex-1">章节：{{ chapterCatalog[0].title }}</text>
			</view>
		</view>
		<!-- 设置结束 -->		
		<!-- 设置底部部分 -->
		<view class="reading-bottom flex align-center fixed-bottom bg-white shadow font animated slideInUp" v-if="setStatus">
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
		<!-- 文本部分 -->
		
		<swiper class="px-2" :style="{ height:`${calHeight}rpx`}" @tap="changeSetStatus">
			<swiper-item v-for="(item,index) in testChapters" :key="item.id">
				<scroll-view scroll-y :style="{ height:`${calHeight}rpx`}">
					<rich-text :nodes="item.text"></rich-text>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import test from '@/common/test.js'
	import tool from '@/common/tool.js'
	import htmlParser from '@/common/html-parser.js'
	export default {
		data() {
			return {
				novalName:test.name,  //小说姓名
				chapterCatalog:test.chapterCatalog,  //小说目录
				calHeight:0,
				testChapters:test.content,
				setStatus:false
			}
		},
		methods: {
			changeSetStatus(){
				this.setStatus = !this.setStatus
			}
		},
		mounted(){
			tool.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success: val => this.calHeight = val
			})
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

.cal{
	height: 0rpx;
}

</style>
