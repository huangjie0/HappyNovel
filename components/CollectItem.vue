<template>
	<view>
		<view class="books-container border-bottom flex align-center p-1">
			<image :src="bookImgUrl" mode="aspectFill" class="books-image rounded mx-2"></image>
			<view class="books-text flex-1 position-relative">
				<view class="py-1 font-md font-weight-bold">
					{{ bookName }}
				</view>
				<view class="font text-light-black Multi-row-truncation">
					{{ bookSynopsis }}
				</view>
				<icon icon-id="icon-diandian" class="position-absolute right-0" @tap="init"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"CollectItem",
		props:{
			bookId:{
				type:Number,
				default: 0
			},
			bookImgUrl: {
				type:String,
				default:''
			},
			bookName:{
				type:String,
				default:''
			},
			bookSynopsis:{
				type:String,
				default:''
			}
		},
		methods:{
			throwId(id){
				this.$emit("getId",id)
			},
			showCancelCol(bol){
				this.$emit('showCancelCol',bol)
			},
			init(){
				this.showCancelCol(true)
				this.throwId(this.bookId)
			}
		}
	}
</script>

<style scope lang="scss">
	.books-container{
		height: 250rpx;
		.books-image{
			width: 220rpx;
			height: 220rpx;
		}
		.books-text{
			height: 100%;
		}
	}
</style>