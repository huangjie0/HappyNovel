<template>
	<view class="fixed-bottom audi-container mx-2 mb-1 rounded" @tap="toDetailPage">
		<!-- 进度部分 -->
		<view class="flex align-center justify-center font audi-slider" @tap.stop>
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
		<view class="audi-bottom flex align-center justify-between mx-2">
			<view class="font singer">
				<view>歌手-{{ singerName }}</view>
				<view>歌曲-{{ audioName }}</view>
			</view>
			<view class="flex align-center" @tap.stop>
				<view class="animated" hover-class="pulse">
					<MyIcon icon-id="icon-shangyishou" icon-size="75" @tap="preOrNext('pre')"></MyIcon>
				</view>
				<MyIcon :icon-id="playStatus ? 'icon-bofang' : 'icon-ziyuan'" icon-size="75" class="m-2" @tap="playOrpause"></MyIcon>
				<view class="animated" hover-class="pulse">
					<MyIcon icon-id="icon-xiayishou" icon-size="75" @tap="preOrNext('next')"></MyIcon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'; 
	import filter from '@/common/filter.js';
	import musicResourecs from '../store/audio/musicResourecs.js';
	export default {
		//局部过滤器
		filters:{
			...filter
		},
		computed:{
			...mapState({
				playStatus:({ audio }) => audio.playStatus,
				durationTime:({ audio }) => audio.durationTime,
				currentTime:({ audio }) => audio.currentTime,
				currentPlayIndex:({ audio }) => audio.currentPlayIndex
			}),
			audioName(){
				return musicResourecs.musicResourecs[this.currentPlayIndex].name
			},
			singerName(){
				return musicResourecs.musicResourecs[this.currentPlayIndex].singer.name
			}
		},
		mounted(){
			this.init();
		},
		destroyed(){
			this.destroy()
		},
		methods:{
			...mapActions(['init','playOrpause','preOrNext','sliderToPlay']),
			...mapMutations(['destroy']),
			toDetailPage(){
				uni.navigateTo({
					url:'/pages/musicDetail/musicDetail'
				})
			}
		}
	}
	
</script>

<style scoped lang="scss">
	.audi-container{
		height: 160rpx;
		background-color: #d1ccc0;
		opacity: 0.9;
		.audi-slider{
			color: #7a8388;
			height: 65rpx;
		}
		.audi-bottom{
			height: 95rpx;
			.singer{
				color: #424651;
			}
		}
		.slider-container{
			width: 500rpx;
		}
	}
</style>