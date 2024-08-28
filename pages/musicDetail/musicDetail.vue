<template>
	<view class="music-container" :class="nightStatus ? 'night-theme' : ''">
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
				<view class="mr-3" @tap="preOrNext('pre')">
					<MyIcon iconId="icon-shangyixiang" iconSize="85"></MyIcon>
				</view>
				<view class="mx-5" @tap="playOrpause">
					<MyIcon iconSize="80" :icon-id="!playStatus ? 'icon-bofang1' : 'icon-zanting'"></MyIcon>
				</view>
				<view class="ml-2" @tap="preOrNext('next')">
					<MyIcon iconId="icon-xiayixiang" iconSize="85"></MyIcon>
				</view>
			</view>
			<view class="flex justify-center align-center music-button-2 font">
				<view class="flex flex-column align-center" @tap="changeStatus('listStatus')">
					<MyIcon :iconId="listStatus ? 'icon-liebiao' : 'icon-icon--'" iconSize="60"></MyIcon>
					<text class="pt-1">播放列表</text>
				</view>
				<view class="flex flex-column align-center collect" @tap="changeStatus('collectStatus')">
					<MyIcon :iconId="collectStatus ? 'icon-xihuan2' :'icon-aixinfengxian'" iconSize="60"></MyIcon>
					<text class="pt-1">收藏</text>
				</view>
				<view class="flex flex-column align-center" @tap="changeStatus('nightStatus')">
					<MyIcon :iconId="nightStatus ? 'icon-yueliang' : 'icon-yejianmoshi'" iconSize="60"></MyIcon>
					<text class="pt-1">夜间模式</text>
				</view>
			</view>
		</view>
		<view class="fixed-bottom shadow p-2 bottom-container animated fadeInUp" v-show="!listStatus">
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
				<MyIcon iconId="icon-jieshao" iconSize="65" @myClick="showSingerIntro"></MyIcon>
			</view>
			<view>
				<view class="font-md pt-2">
					歌手简介：
				</view>
				<view class="text-ellipsis w-100">
					{{ singerIntro }}
				</view>
			</view>
		</view>
		
		<!-- 播放列表区域 -->
		<view class="fixed-bottom shadow p-2 bottom-container-2 animated fadeInUp" v-show="listStatus">
			<view class="font-weight-bold font-md search-list">
				列表选择
			</view>
			<scroll-view scroll-y class="scroll-list">
				<block v-for="(item,index) in audioList" :key="item.id">
					<view class="flex align-center font scroll-list-item px-2" hover-class="bg-light" @tap="selectPlay(item.id)">
						<text class="flex-1 text-ellipsis">{{ item.audioName }}</text>
						<text class="flex-1 text-ellipsis">{{ item.singerName }} </text>
						<view class="flex-1 ml-3 flex align-center">
							<text class="mr-2">播放</text>
							<MyIcon iconId="icon-bofangsanjiaoxing" iconSize="40"></MyIcon>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<!-- 歌手简介详情 -->
		<uni-popup ref="popup" type="center">
			<view class="px-2 shadow popup" :class="nightStatus ? 'night-theme' : 'bg-white'">
				<text class="font">{{ singerIntro }}</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { mapState,mapMutations,mapActions } from "vuex"
	import musicResourecs from '../../store/audio/musicResourecs.js';
	import filter from '@/common/filter.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	
	export default {
		//局部过滤器
		filters:{
			formatTime(num){
				if(num == 100){
					return filter.formatTime(0)
				}
				return filter.formatTime(num)
			}
		},
		data(){
			return{
				listStatus:false,
				collectStatus:false,
				nightStatus:false
			}
		},
		methods: {
			...mapActions(['playOrpause','preOrNext','sliderToPlay','selectPlay']),
			//改变状态
			changeStatus(statusTtpe){
				this[statusTtpe] = !this[statusTtpe]
			},
			//中间弹出框
			showSingerIntro(){
				this.$refs.popup.open()
			}
		},
		computed:{
			...mapState({
				playStatus:({ audio }) => audio.playStatus,
				currentPlayIndex:({ audio }) => audio.currentPlayIndex,
				durationTime:({ audio }) => audio.durationTime,
				currentTime:({ audio }) => audio.currentTime,
				audioList:({ audio }) => audio.audioList
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
			uniPopup
		}
	}
</script>

<style scoped lang="scss">
.music-container{
	height: 100vh;
}
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
	z-index: 0;
}
.bottom-container-2{
	height: 220rpx;
	border-radius: 30rpx;
}
.search-list{
	height: 50rpx;
}
.scroll-list{
	height: 200rpx;
	&-item{
		height: 80rpx;
	}
}
.popup{
	width: 600rpx;
	height: 850rpx;
	border-radius: 40rpx;
}

</style>
