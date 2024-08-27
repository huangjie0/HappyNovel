<template>
	<view>
		<SearchBox class="cal"></SearchBox>
		<TabTop :tab-arr="['我的收藏','收听历史']" @getTabIndex="getTabIndex" class="cal"></TabTop>
		<!-- 具体内容 -->
		<!-- 我的收藏 -->
		<scroll-view scroll-y v-if="tabIndex == 0" :style="{ height:`${calHeight}rpx` }">
			<CollectItem @getId="getId" @showCancelCol="showCancelCol" :book-img-url="test.imgurl" :book-name="test.name" :book-synopsis="test.synopsis" :book-id="test.id"></CollectItem>
		</scroll-view>
		<!-- 收听历史 -->
		<scroll-view scroll-y v-else :style="{ height:`${calHeight}rpx`}">
			<view></view>
		</scroll-view>
		<!-- 展示取消收藏界面 -->
		<UniPopup ref="popupRef" type="bottom" @change="changeStatus">
			<view class="bg-white">
				<view class="uncollect">
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
	
	export default {
		data(){
			return {
				tabIndex:0,
				calHeight:0,
				test:{
					id: 1000,
					name: '《朝花夕拾》',
					synopsis: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文...',
					imgurl: '/static/indexListImg/indexListImg4.png'
				},
				showCollectStatus:false
			}
		},
		methods:{
			getTabIndex(index){
				this.tabIndex = index
			},
			getId(id){
				console.log(id);
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