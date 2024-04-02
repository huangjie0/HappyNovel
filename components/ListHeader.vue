<template>
	<view class="flex align-center justify-between p-2 my-2">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex align-center">
			<view class="font text-light-black">
				<slot name="tips">查看全部</slot>
			</view>
			<icon icon-id="icon-iconfonti" icon-color="text-light-black"></icon>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	
</style>