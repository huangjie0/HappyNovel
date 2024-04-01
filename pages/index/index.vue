<template>
	<view class="flex align-center justify-center mx-2 border rounded bg-light search-title">
		<Icon icon-id="icon-tubiao11" icon-size="25" icon-color="text-light-muted" class="p-1"></Icon>
		<input type="text" placeholder="搜索你想听的节目" class="flex-1 font-sm"/>
	</view>
</template>

<script>
	import Icon from '@/components/Icon.vue';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			Icon
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.search-title{
	height: 62rpx;
	opacity: 0.8;
}
</style>
