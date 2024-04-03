<template>
	<view class="flex align-center justify-between mx-3 py-4">
		<block v-for="(item,index) in functionSort" :key="index">			
			<view class="flex flex-column align-center" @tap="switchToPage(index)">
				<icon :icon-id="item.iconId" :icon-color="item.iconColor" icon-size="65"></icon>
				<text class="mt-1 font text-light-black">{{ item.name }}</text>
			</view>
		</block>
	</view>
</template>

<script>
	let pageList = {
		[0]:"/pages/ReadList/ReadList",
		[1]:"/pages/ListenNovel/ListenNovel",
		[2]:"/pages/ListenMusic/ListenMusic",
		[3]:"/pages/ListenKnowledge/ListenKnowledge"
	}
	export default{
		props:{
			functionSort:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			switchToPage(index){
				uni.navigateTo({
					url:pageList[index]
				})
			}
		}
	}
</script>

<style>
</style>