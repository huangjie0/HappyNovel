<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<TabTop :tab-arr="['我的收藏','收听历史']" @getTabIndex="getTabIndex" class="cal"></TabTop>
		<!-- 具体内容 -->
		<!-- 我的收藏 -->
		<scroll-view scroll-y v-if="tabIndex == 0" :style="{ height:`${calHeight}rpx` }">
			<block v-for="item in collectArr" :key="item.id">
				<CollectItem @getId="getId" @showCancelCol="showCancelCol" :book-img-url="item.imgurl" :book-name="item.name" :book-synopsis="item.synopsis" :book-id="item.id"></CollectItem>
			</block>
		</scroll-view>
		<!-- 收听历史 -->
		<scroll-view scroll-y v-else :style="{ height:`${calHeight}rpx`}">
			<view></view>
		</scroll-view>
		<!-- 展示取消收藏界面 -->
		<UniPopup ref="popupRef" type="bottom" @change="changeStatus">
			<view class="bg-white">
				<view class="uncollect" @tap="cancalCollect">
					<icon icon-id="icon-xingxing" icon-color="text-danger" class="px-3"></icon>
					<text class="font">取消收藏</text>
				</view>
				<view class="bg-hover-light parting-line"></view>
				<view class="cancel">取消</view>
			</view>
		</UniPopup>
	</view>
</template>

<script>
	import SearchBox from '@/components/SearchBox.vue'
	import TabTop from '@/components/TabTop.vue'
	import CollectItem from '@/components/CollectItem.vue'
	import tool from '@/common/tool.js'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
	import { books } from '@/common/book.js'
	
	export default {
		data(){
			return {
				tabIndex:0,
				calHeight:0,
				showCollectStatus:false,
				collectArr:[],
				//取消收藏id
				uncollectId: 0
			}
		},
		methods:{
			initData(){
				this.collectArr = books
			},
			getTabIndex(index){
				this.tabIndex = index
			},
			getId(id){
				this.uncollectId = id
			},
			idToIndex(id){
				return this.collectArr.find(item => item.id == id)
			},
			cancalCollect(){
				let index = this.idToIndex(this.uncollectId)
				this.collectArr.splice(index,1)
			},
			showCancelCol(bol){
				this.$refs.popupRef.open()
			},
			changeStatus(e){
				this.showCollectStatus = e.show
			}
		},
		mounted(){
			tool.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:val => this.calHeight = val
			})
		},
		onLoad(){
			this.initData()
		},
		watch:{
			showCollectStatus(newValue,oldValue){
				newValue ? uni.hideTabBar({animation:true}) : uni.showTabBar({animation:true})
			}
		},
		components:{
			SearchBox,
			TabTop,
			CollectItem,
			UniPopup
		}
	}
</script>

<style scoped lang="scss">
	.parting-line{
		height: 15rpx;
	}
	.uncollect{
		height: 100rpx;
		line-height: 100rpx;
	}
	.cancel{
		height: 110rpx;
		line-height: 110rpx;
		text-align: center;
	}
</style>