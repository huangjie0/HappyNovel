<template>
	<view class="m-2">
		<swiper indicator-dots autoplay circular class="swiper-conter" indicator-active-color="#ffffff" @change="getCurrentImgIndex">
			<swiper-item v-for="(item,index) in imageList" :key="index">
				<image :src="item.src" mode="aspectFill" class="w-100 animated" 
				:class="currentImIndex == index ? 'my-animate' : '' "></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			imageList:{
				type:Array,
				default:()=>[]
			}
		},
		data(){
			return{
				currentImIndex:0
			}
		},
		methods:{
			getCurrentImgIndex(e){
				this.currentImIndex = e.detail.current
			}
		}
	}
</script>

<style lang="scss" scoped>
.swiper-conter{
	height: 380rpx;
}
</style>