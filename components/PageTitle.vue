<template>
	<view class="flex align-center">
		<Icon icon-id="icon-jiantou-copy" class="m-2" @tap="quit" :icon-color="theme"></Icon>
		<view class="font-lg"><slot></slot></view>
	</view>
</template>

<script>
	export default {
		props:{
			theme:{
				type:String,
				default: 'bg-white'
			}
		},
		methods:{
			quit(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
	
</script>

<style scoped lang="scss">
	
</style>