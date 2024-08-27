<template>
	<!-- 图标组件封装 -->
	<text class="iconfont" :class="[iconId,iconColor]" :style="{fontSize: `${iconSize}rpx`}" @tap="myClick"></text>
</template>

<script>
	export default {
		name:"MyIcon",
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
				type:[String,Number],
				default:'45'
			}
		},
		methods:{
			myClick(){
				this.$emit('myClick')
			}
		}
	}
</script>

<style>

</style>