<template>
	<view>
		<!-- 占位 -->
		<view class="cal"></view>
		<!-- 设置开始 -->
		<view class="fixed-top bg-white shadow animated slideInDown" v-if="setStatus">
			<view class="reading-container flex align-center">
				<icon icon-id="icon-jiantou-copy px-2"></icon>
				<text>{{ novalName }} </text>
				<text class="px-2 font-sm text-ellipsis flex-1">章节：{{ curChapterTitle }}</text>
			</view>
		</view>
		<!-- 设置结束 -->
				
		<!-- 目录开始 -->
		<uniDrawer ref="drawerRef" :width="230">
			<view class="chapter-selection flex align-center justify-center">章节选择</view>
			<scroll-view scroll-y :style="{ height:`${calHeight - 80 }rpx`}" >
				<block v-for="item in chapterCatalog" :key="item.id">
					<view class="px-1 py-2 text-ellipsis border-bottom rounded" :class="chapterIndex + 1 === item.id ? 'curChapter' : ''" @tap="toPointChapter(item.id)">
						{{ item.title }}
					</view>
				</block>
			</scroll-view>
		</uniDrawer>
		<!-- 目录结束 -->
		<!-- 设置底部部分 -->
		<view class="reading-bottom flex align-center fixed-bottom bg-white shadow font animated slideInUp" v-if="setStatus">
			<view class="flex-1 flex flex-column align-center" @tap="showCatalogue">
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
		<swiper class="px-2" :style="{ height:`${calHeight}rpx`}" @tap="changeSetStatus" :current="chapterIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in loadedChapters" :key="item.id">
				<scroll-view scroll-y :style="{ height:`${calHeight}rpx`}">
					<uniLoadMore status="loading" v-if="!item.text"></uniLoadMore>
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
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	export default {
		data() {
			return {
				novalName:test.name,  //小说姓名
				chapterCatalog:test.chapterCatalog,  //小说目录
				calHeight:0,
				loadedChapters:[], //已经加载的章节
				setStatus:false,
				chapterIndex:0 //当前章节的标识
			}
		},
		components:{
			uniLoadMore,
			uniDrawer
		},
		computed:{
			//当前章节标题
			curChapterTitle(){
				return this.chapterCatalog[this.chapterIndex].title
			}
		},
		methods: {
			//预加载方法
			preLoad(){
				test.chapterCatalog.forEach(item => this.loadedChapters.push({
					id:item.id,
					title:item.title,
					text:''
				}))
			},
			toPointChapter(id){
				let curIndex = this.chapterCatalog.findIndex(item => item.id === id)
				if(this.chapterIndex == curIndex ) return
				this.changeIndex(curIndex)
				this.deplyLoad()
			},
			changeIndex(index){
				this.chapterIndex = index
			},
			swiperChange(e){
				this.changeIndex(e.detail.current)
				this.deplyLoad()
			},
			//延时加载
			deplyLoad(){
				let index = this.chapterIndex
				if(this.loadedChapters[index].text == ''){
					setTimeout(()=>this.loadedChapters[index].text = htmlParser(test.content[index].text),1000)
				}
			},
			changeSetStatus(){
				this.setStatus = !this.setStatus
			},
			showCatalogue(){
				this.$refs.drawerRef.open()
				this.changeSetStatus()
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
			this.preLoad()
			this.deplyLoad()
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

.chapter-selection{
	height: 80rpx;
}
.curChapter{
	background-color: #8395a7;
	color: white;
}
</style>
