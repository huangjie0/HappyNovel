<template>
	<view>
		<view class="book-details flex align-center py-2 cal">
			<image :src="bookItem.imgurl" mode="aspectFill" lazy-load class="flex-1 mx-2 rounded img-url"></image>
			<view class="flex-2 mx-2">
				<view class="book-details-name">
					{{ bookItem.name }}
				</view>
				<view class="font mt-1">
					作者：{{ bookItem.author }}
				</view>
				<view class="flex align-center mt-2">
					<button class="flex-1 mx-1">分享</button>
					<button class="flex-1 mx-1" @tap="changeCollectedStatus">{{ collectedStatus ? '已收藏' : '收藏' }}</button>
				</view>
			</view>
		</view>
		<view class="shadow">
			<TabTop :tab-arr="['详情','目录']" @getTabIndex="getTabIndex" class="cal"></TabTop>
			<!-- 具体内容 -->
			<!-- 详情 -->
			<scroll-view scroll-y v-if="tabIndex == 0" :style="{ height:`${calHeight}rpx` }">
				<view>
					<view class="py-2 flex justify-center text-light-black">——简介——</view>
					<view class="px-2 font-lg intro">{{ bookItem.synopsis }}</view>
				</view>
			</scroll-view>
			<!-- 目录 -->
			<scroll-view scroll-y v-else :style="{ height:`${calHeight}rpx`}">
				<block v-for="(item,index) in chapterCatalog" :key="item.id">
					<view class="p-2 text-ellipsis border-bottom" hover-class="bg-light" @tap="toReadingPage(item.id)">
						{{ item.title }}
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import TabTop from '@/components/TabTop.vue'
	import tool from '@/common/tool.js'
	export default {
		data(){
			return {
				calHeight:0,
				tabIndex:0,
				bookItem:{},
				chapterCatalog:[],
				currentBookId:'',
				collectedBooks: getApp().globalData.collectedBooks,
				collectedStatus: false,
			}
		},
		components:{
			TabTop
		},
		mounted(){
			tool.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:val => this.calHeight = val
			})
		},
		 onLoad(e){
			this.currentBookId = e.bookID;
			this.getData(this.currentBookId)
		},
		methods:{
			async getData(id){
				const { list } = await this.$http.get('/book');
				const res = await this.$http.get('/testSynopsis');
				this.chapterCatalog = res.chapterCatalog
				this.bookItem = list.find(item => item.id == Number(id));
				
				let curItem = this.collectedBooks.find(item => item.id == this.currentBookId)
				//判断是否是收藏
				if(curItem) this.collectedStatus = true;

			},
			getTabIndex(index){
				this.tabIndex = index
			},
			toReadingPage(id){
				uni.navigateTo({
					url:`/pages/reading/reading?chapterId=${id}`
				})
			},
			changeCollectedStatus(){
				this.collectedStatus = !this.collectedStatus
				uni.showToast({
					icon:'none',
					title:this.collectedStatus ? '已收藏' : '取消收藏'
				})
				
				let index = this.collectedBooks.findIndex(item => item.id == this.currentBookId)
				this.collectedStatus ? this.collectedBooks.push(this.bookItem) : this.collectedBooks.splice(index,1)
				
			}
		}
	}
</script>

<style scoped lang="scss">
.book-details{
	background-color: #a8b0c3;
	height: 250rpx;
	&-name{
		font-size: 45rpx;
	}
}

.intro{
	line-height: 80rpx;
}

.img-url{
	width: 250rpx;
	height: 210rpx;
}
</style>
