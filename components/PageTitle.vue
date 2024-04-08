<template>
	<view class="flex align-center">
		<Icon icon-id="icon-jiantou-copy" class="m-2" @tap="quit"></Icon>
		<view class="font-lg"><slot></slot></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
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