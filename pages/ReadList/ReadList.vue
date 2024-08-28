<template>
	<view>
		<BookList :book-list="loadBookList"></BookList>
		<LoadMore :status="loadMoreStatus"></LoadMore>
	</view>
</template>

<script>		
	import BookList from '@/components/BookList.vue'
	import LoadMore from '@/components/uni-load-more/uni-load-more.vue'

	export default {
		data() {
			return {
				loadBookList:[],
				loadMoreStatus:'loading'
			}
		},
		methods: {
			async initLoadMore(){
				let obj = await this.$http.get('/readList')
				setTimeout(()=>{
					if(obj.books.length){
						this.loadBookList = [...obj.books]
						this.loadMoreStatus = 'more'
					}
				},2000)	
			},
			//触底加载
			async loadMore(){
				let obj = await this.$http.get('/readList')
				switch (obj.isLoadMore){
					case '正在加载中': return 
						break;
					case '没有更多了':
						this.loadMoreStatus = 'nomore'
						break;
					case '上拉加载显示更多':
						{
							this.loadMoreStatus = 'loading'
							setTimeout(()=>{
								this.loadBookList = [...this.loadBookList,...obj.books];
								this.loadMoreStatus = 'more'
							},1500)
						}
						break;
				}
			}
		},
		onLoad(){
			this.initLoadMore()
		},
		onReachBottom(){
			this.loadMore()
		},
		components:{
			BookList,
			LoadMore
		}
	}
</script>

<style>

</style>
