<template>
	<view>
		<!-- 占位 -->
		<view class="cal"></view>
		<!-- 设置开始 -->
		<view :class="curTheme" class="fixed-top shadow animated slideInDown" v-if="setStatus">
			<view class="reading-container flex align-center">
				<!-- #ifndef MP-WEIXIN -->
				<MyIcon icon-id="icon-jiantou-copy pl-2" @myClick ="recoil"></MyIcon>
				<!-- #endif -->
				
				<text>{{ novalName }} </text>
				<text class="pl-2 font-sm text-ellipsis flex-1">章节：{{ curChapterTitle }}</text>
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
		<!-- 更多设置开始 -->
		<view :class="curTheme" class="flex flex-column justify-center fixed-bottom more-setting px-3 animated slideInUp" v-if="moreStatus">
			<!-- #ifndef H5 -->
			<view class="flex">亮度：<slider min="0" :value="brightNess" @change="setBrightNess" max="100" class="flex-1" block-size="16" active-color="#34495E" background-color="#ECF1F0"></slider></view>
			<!-- #endif -->
			<view class="flex luminance font text-light-black">
				<block v-for="item in themes" :key="item.id">
					<view class="flex-1">
						<view :class="item.id" class="color-block border rounded mx-1" @tap="changeThemeIndex(item.id)"></view>
						<view class="text-center">{{ item.name }}</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 更多设置结束 -->
		<!-- 字体设置开始 -->
		<view :class="curTheme" class="fixed-bottom font-setting px-3 pt-2 animated slideInUp" v-if="typeFaceStatus"> 
			<view class="flex">字体：<slider min="20" :value="myFontSize" max="50" @change="changeFontSize" @changing="changeFontSize" class="flex-1" block-size="16" active-color="#34495E" background-color="#ECF1F0"></slider></view>
			<view class="flex">间距：<slider min="20" :value="myLineHeight" max="100" @change="changeLineHeight" @changing="changeLineHeight" class="flex-1" block-size="16" active-color="#34495E" background-color="#ECF1F0"></slider></view>
		</view>
		<!-- 字体设置结束 -->
		<!-- 设置底部部分 -->
		<view :class="curTheme" class="reading-bottom flex align-center fixed-bottom shadow font animated slideInUp" v-if="setStatus">
			<view class="flex-1 flex flex-column align-center" @tap="showCatalogue">
				<MyIcon icon-id="icon-xueyuan-mulu" icon-size="55"></MyIcon>
				<view>目录</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="nightPattern">
				<MyIcon icon-id="icon-yanjing" icon-size="55"></MyIcon>
				<view>夜间模式</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeTypeFaceStatus(true)">
				<MyIcon icon-id="icon-ziti1" icon-size="55"></MyIcon>
				<view>字体</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeMoreStatus(true)">
				<MyIcon icon-id="icon-diqiuhuanqiu" icon-size="55"></MyIcon>
				<view>更多</view>
			</view>
		</view>
		<!-- 文本部分 -->
		<swiper :class="curTheme" class="px-2" :style="{ height:`${calHeight}rpx`,fontSize:`${myFontSize}rpx`,lineHeight:`${myLineHeight}rpx`}" @tap="changeSetStatus" :current="chapterIndex" @change="swiperChange">
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
	import tool from '@/common/tool.js'
	import htmlParser from '@/common/html-parser.js'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	export default {
		data() {
			return {
				testContent:[],
				novalName:'请稍后',  //小说姓名
				chapterCatalog:[
					{
						id: 1,
						title:''
					}
				],  //小说目录
				calHeight:0,
				themes:[
					{
						id:'blue-theme',
						name:'天蓝'
					},
					{
						id:'eye-help-theme',
						name:'护眼'
					},
					{
						id:'light-gret-theme',
						name:'淡灰'
					},
					{
						id:'morning-theme',
						name:'早晨'
					},
					{
						id:'night-theme',
						name:'夜间 '
					}
				],
				themeIndex: (uni.getStorageSync('themeIndex') == 3 || !uni.getStorageSync('themeIndex')) ? 3 : uni.getStorageSync('themeIndex'),
				brightNess:0, //亮度
				typeFaceStatus:false,
				moreStatus:false,
				loadedChapters:[
					{
						id:1,
						title:'',
					}
				], //已经加载的章节
				setStatus:false,
				chapterIndex:0, //当前章节的标识
				myFontSize:uni.getStorageSync('myFontSize') ? uni.getStorageSync('myFontSize') : 20,
				myLineHeight: uni.getStorageSync('myLineHeight') ? uni.getStorageSync('myLineHeight') : 45
			}
		},
		components:{
			uniLoadMore,
			uniDrawer
		},
		computed:{
			//当前章节标题
			curChapterTitle(){
				if(!this.chapterCatalog[this.chapterIndex].title) return '加载中'
				return this.chapterCatalog[this.chapterIndex].title
			},
			//当前主题
			curTheme(){
				return this.themes[this.themeIndex].id
			}
		},
		methods: {
			//初始化
			async init(id){
				let { content } = await this.$http.get('/testContent')
				this.testContent = content;
				let res = await this.$http.get('/testSynopsis');
				this.novalName = res.name;
				this.chapterCatalog = res.chapterCatalog;
				
				let curIndex = this.chapterCatalog.findIndex(item => item.id == id)
				this.changeIndex(curIndex)
				this.preLoad()
				this.deplyLoad()
			},
			recoil(){
				uni.navigateBack({
					delta:1
				})
			},
			//夜间模式
			nightPattern(){
				this.themeIndex !== 4 ? this.changeThemeIndex('night-theme') : this.changeThemeIndex('morning-theme')
			},
			//修改主题类名
			changeThemeIndex(id){
				let curIndex = this.themes.findIndex(theme => theme.id == id);
				this.themeIndex = curIndex;
				uni.setStorageSync('themeIndex',curIndex)
			}, 
			//改变设置亮度
			setBrightNess(e){
				let newVal = e.detail.value
				this.brightNess = newVal;
				uni.setScreenBrightness({
					value: newVal * 8 / 100
				})
			},
			//获取亮度
			getBrightNess(){
				//获取亮度的api
				uni.getScreenBrightness({
					success: val => this.brightNess = Math.floor(val.value) / 8 * 100  
				})
			},
			changeTypeFaceStatus(Bol){
				this.typeFaceStatus = Bol
				if(this.typeFaceStatus) this.changeSetStatus()
			},
			//改变更多选项
			changeMoreStatus(Bol){
				this.moreStatus = Bol
				if(this.moreStatus) this.changeSetStatus()
			},
			//字体改变触发
			changeFontSize(e){
				this.myFontSize = e.detail.value;
				uni.setStorageSync('myFontSize',this.myFontSize)
			},
			//行距改变触发
			changeLineHeight(e){
				this.myLineHeight = e.detail.value;
				uni.setStorageSync('myLineHeight',this.myLineHeight)
			},
			//预加载方法
			preLoad(){
				this.loadedChapters.shift();
				this.chapterCatalog.forEach(item => this.loadedChapters.push({
					id:item.id,
					title:item.title,
					text:''
				}))
			},
			toPointChapter(id){
				let curIndex = this.chapterCatalog.findIndex(item => item.id === Number(id))
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
					setTimeout(()=>this.loadedChapters[index].text = htmlParser(this.testContent[index].text),1000)
				}
			},
			changeSetStatus(){
				if(!this.setStatus){
					if(this.typeFaceStatus || this.moreStatus){
						this.changeTypeFaceStatus(false)
						this.changeMoreStatus(false)
						return
					}
				}
				this.setStatus = !this.setStatus
			},
			showCatalogue(){
				this.$refs.drawerRef.open()
				this.changeSetStatus()
			}
		},
		onLoad(e){
			this.init(e.chapterId)
		},
		created(){
			// #ifndef H5
			this.getBrightNess()
			// #endif
			
			this.$nextTick(()=>{
				tool.calSurplusHeight({
					pageID:this,
					pos:'cal',
					success: val => this.calHeight = val
				})
			})
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
.font-setting{
	height: 180rpx;
}
.more-setting{
	height: 250rpx;
}
.luminance{
	justify-content: space-between;
	.color-block{
		height: 80rpx;
	}
}
</style>
