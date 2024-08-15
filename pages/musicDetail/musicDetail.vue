<template>
	<view>
		<PageTitle>音乐详情</PageTitle>
		<view class="flex flex-column align-center justify-center">
			<view class="">
				<text class="font">歌曲：</text>
				<text class="font-weight-bold">{{audioName}}</text>
			</view>
			<view class="">
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
			<view>
				<view>
					<icon iconId="icon-shangyixiang" iconSize="85"></icon>
				</view>
				<view>
					<icon iconId="icon-bofang1" iconSize="80"></icon>
				</view>
				<view>
					<icon iconId="icon-xiayixiang" iconSize="85"></icon>
				</view>
			</view>
			<view>
				<view>
					<icon iconId="icon-icon--" iconSize="60"></icon>
					<text>播放列表</text>
				</view>
				<view>
					<icon iconId="icon-aixinfengxian" iconSize="60"></icon>
					<text>收藏</text>
				</view>
				<view>
					<icon iconId="icon-yejianmoshi" iconSize="60"></icon>
					<text>夜间模式</text>
				</view>
			</view>
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
		data() {
			return {
				
			}
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
</style>
