<template>
	<!-- 图标组件封装 -->
	<text class="iconfont" :class="[iconId,iconColor]" :style="{fontSize: `${iconSize}rpx`}"></text>
</template>

<script>
	export default {
		name:"Icon",
		data() {
			return {
				
			};
		},
		props:{
			iconId:{
				type:String,
				default:''
			},
			iconColor:{
				type:String,
				default:'text-dark'
			},
			iconSize:{
				type:String,
				default:'45'
			}
		}
	}
</script>

<style>

</style>