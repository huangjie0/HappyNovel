<template>
	<view>
		<PageTitle>图片详情</PageTitle>
		<view class="book-details flex align-center py-2">
			<image src="@/static/Rebook/Rebook1.jpg" mode="widthFix" lazy-load class="flex-1 mx-2 rounded"></image>
			<view class="flex-2 mx-2">
				<view class="book-details-name">
					{{ name }}
				</view>
				<view class="font mt-1">
					作者：{{ author }}
				</view>
				<view class="flex align-center mt-2">
					<button class="flex-1 mx-2">分享</button>
					<button class="flex-1 mx-2">收藏</button>
				</view>
			</view>
		</view>
		<view class="shadow tab-container">
			<TabTop :tab-arr="['详情','目录']" @getTabIndex="getTabIndex"></TabTop>
			<!-- 具体内容 -->
			<!-- 详情 -->
			<scroll-view scroll-y v-if="tabIndex == 0" class="intro-container">
				<view>
					<view class="py-2 flex justify-center text-light-black">——简介——</view>
					<view class="px-2 font-lg intro">{{ synopsis }}</view>
				</view>
			</scroll-view>
			<!-- 目录 -->
			<scroll-view scroll-y v-else class="catalogue-container">
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
	import PageTitle from '@/components/PageTitle.vue'
	import TabTop from '@/components/TabTop.vue'
	import test from '@/common/test'
	export default {
		data(){
			return {
				tabIndex:0,
				name:test.name,
				author:test.author,
				synopsis:test.synopsis,
				chapterCatalog:test.chapterCatalog
			}
		},
		components:{
			PageTitle,
			TabTop
		},
		methods:{
			getTabIndex(index){
				this.tabIndex = index
			},
			toReadingPage(id){
				uni.navigateTo({
					url:`/pages/reading/reading?chapterId=${id}`
				})
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
.tab-container{
	height:1210rpx;
	.intro-container{
		height: 1130rpx;
		.intro{
			line-height: 80rpx;
		}
	}
	.catalogue-container{
		height: 1130rpx;
	}
}
</style>
