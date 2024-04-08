<template>
	<view class="fixed-bottom audi-container mx-2 mb-1 rounded">
		<!-- 进度部分 -->
		<view class="flex align-center justify-center font audi-slider">
			<!-- 总时长 -->
			<view>00:00</view>
			<!-- 进度条部分 -->
			<view class="slider-container">
				<slider block-size="16" active-color="#e48267" background-color="#eef2f3"/>
			</view>
			<!-- 当前播放时刻 -->
			<view>00:00</view>
		</view>
		<view class="audi-bottom flex align-center justify-between mx-2">
			<view class="font singer">
				<view>歌手-The one</view>
				<view>歌曲-暗香</view>
			</view>
			<view class="">
				<icon icon-id="icon-shangyishou" icon-size="75"></icon>
				<icon icon-id="icon-ziyuan" icon-size="75" class="m-2" @tap="playOrpause"></icon>
				<icon icon-id="icon-xiayishou" icon-size="75"></icon>
				{{ num }}
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'; 
	export default {
		computed:{
			...mapState({
				num:({audio}) => audio.num
			})
		},
		mounted(){
			this.init()
		},
		destroyed(){
			this.destroy()
		},
		methods:{
			...mapActions(['init','playOrpause']),
			...mapMutations(['destroy'])
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