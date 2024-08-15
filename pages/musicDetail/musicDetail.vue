<template>
	<view>
		<PageTitle>音乐详情</PageTitle>
		<view class="flex flex-column align-center justify-center">
			<view>
				<text class="font">歌曲：</text>
				<text class="font-weight-bold">{{audioName}}</text>
			</view>
			<view>
				<text class="font">歌手：</text>
				<text class="font-weight-bold">{{singerName}}</text>
			</view>
		</view>
		<!-- 歌曲图片 -->
		<view class="music flex align-center justify-center">
			<image src="../../static/music/music1.png" mode="widthFix" lazy-load class="music-image"></image>
		</view>
		<!-- 进度部分 -->
		<view class="flex align-center justify-center font audi-slider">
			<!-- 总时长 -->
			<view>{{ durationTime | formatTime }}</view>
			<!-- 进度条部分 -->
			<view class="slider-container">
				<slider block-size="16" active-color="#e48267" background-color="#eef2f3" 
				:max="durationTime" :value="currentTime" @change="sliderToPlay"/>
			</view>
			<!-- 当前播放时刻 -->
			<view>{{ currentTime | formatTime}}</view>
		</view>
		<!-- 按钮部分 -->
		<view>
			<view class="flex justify-center align-center music-button">
				<view class="mr-3">
					<icon iconId="icon-shangyixiang" iconSize="85"></icon>
				</view>
				<view class="mx-5">
					<icon iconId="icon-bofang1" iconSize="80"></icon>
				</view>
				<view class="ml-2">
					<icon iconId="icon-xiayixiang" iconSize="85"></icon>
				</view>
			</view>
			<view class="flex justify-center align-center music-button-2 font text-light-black">
				<view class="flex flex-column align-center">
					<icon iconId="icon-icon--" iconSize="60"></icon>
					<text class="pt-1">播放列表</text>
				</view>
				<view class="flex flex-column align-center collect">
					<icon iconId="icon-aixinfengxian" iconSize="60"></icon>
					<text class="pt-1">收藏</text>
				</view>
				<view class="flex flex-column align-center">
					<icon iconId="icon-yejianmoshi" iconSize="60"></icon>
					<text class="pt-1">夜间模式</text>
				</view>
			</view>
		</view>
		<!-- <view class="fixed-bottom shadow p-2 bottom-container">
			<view class="flex justify-between">
				<view>
					<view>
						<text class="font">歌曲：</text>
						<text class="font-weight-bold">{{audioName}}</text>
					</view>
					<view>
						<text class="font">歌手：</text>
						<text class="font-weight-bold">{{singerName}}</text>
					</view>
				</view>
				<icon iconId="icon-jieshao" iconSize="65"></icon>
			</view>
			<view>
				<view class="font-md pt-2">
					歌手简介：
				</view>
				<view class="text-ellipsis w-100">
					{{ singerIntro }}
				</view>
			</view>
		</view> -->
		
		<!-- 播放列表区域 -->
		<view class="fixed-bottom shadow p-2 bottom-container-2">
			<view class="font-weight-bold font-md search-list">
				列表选择
			</view>
			<scroll-view scroll-y class="scroll-list">
				<block>
					<view></view>
				</block>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import PageTitle from '@/components/PageTitle.vue'
	import { mapState,mapMutations,mapActions } from "vuex"
	import musicResourecs from '../../store/audio/musicResourecs.js';
	import tool from '@/common/tool.js';
	export default {
		//局部过滤器
		filters:{
			...tool
		},
		methods: {
			...mapActions(['init','playOrpause','preOrNext','sliderToPlay'])
		},
		computed:{
			...mapState({
				currentPlayIndex:({ audio }) => audio.currentPlayIndex,
				durationTime:({ audio }) => audio.durationTime,
				currentTime:({ audio }) => audio.currentTime,
			}),
			audioName(){
				return musicResourecs.musicResourecs[this.currentPlayIndex].name
			},
			singerName(){
				return musicResourecs.musicResourecs[this.currentPlayIndex].singer.name
			},
			singerIntro(){
				return musicResourecs.musicResourecs[this.currentPlayIndex].singer.synopsis
			}
		},
		components:{
			PageTitle
		}
	}
</script>

<style scoped lang="scss">
.music{
	height: 420rpx;
	&-image{
		border-radius: 35rpx;
		box-shadow: 0 2rpx 6rpx 0;
	}
}

.audi-slider{
	color: #7a8388;
	height: 65rpx;
}

.slider-container{
	width: 500rpx;
}
.collect{
	padding: 0 80rpx;
}
.music-button{
	padding-top: 60rpx;
}
.music-button-2{
	padding-top: 100rpx;
}
.bottom-container{
	height: 200rpx;
	border-radius: 30rpx;
}
.bottom-container-2{
	height: 400rpx;
	border-radius: 30rpx;
	background-color: pink;
}
.search-list{
	height: 50rpx;
}
.scroll-list{
	height: 350rpx;
}
</style>
