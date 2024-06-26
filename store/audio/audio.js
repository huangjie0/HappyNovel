import musicResourecs from './musicResourecs.js';

let audio;
export default {
	state:{
		playStatus:false,
		currentPlayIndex:0,
		durationTime:0, //音频总时长
		currentTime:0 //当前播放时刻
	},
	getters:{
		
	},
	mutations:{
		//监听
		addAudioEvent(state){
			audio.onPlay(()=>{
				state.playStatus = true
				state.durationTime = audio.duration
				console.log("开始播放");
			})
			audio.onPause(()=>{
				state.playStatus = false
				console.log("暂停播放");
			})
			audio.onStop(()=>{
				state.playStatus = false
				console.log("停止播放");
			})
			audio.onEnded(()=>{
				state.playStatus = false
				console.log("音频自然播放结束");
			})
			audio.onError(()=>{
				console.log("音频播放错误");
			})
			audio.onTimeUpdate(()=>{
				state.currentTime = audio.currentTime 
			})
		},
		//销毁
		destroy(){
			audio.offCanplay()
			audio.offPause()
			audio.offStop()
			audio.offEnded()
			audio.offTimeUpdate()
			audio.offError()
		},
		//开始播放
		audioPlay(state){
			let index = state.currentPlayIndex;
			audio.src = musicResourecs.musicResourecs[index].src;
			audio.play()
		},
		// 暂停方法
		audioPause(){
			audio.pause()
		},
		//停止播放
		audioStop(){
			audio.stop()
		},
		//改变播放标识
		changePlayIndex(state,index){
			state.currentPlayIndex = index 
		}
	},
	actions:{
		init({commit}){
			// 实例化api
			if(audio) return
			audio = uni.createInnerAudioContext()
			commit('addAudioEvent')
		},
		playOrpause({ state,commit }){
			if(!state.playStatus){
				commit('audioPlay')
			}else{
				commit('audioPause')
			}
		},
		//切歌
		preOrNext({state,commit},type){
			//先停止播放音乐
			commit('audioStop');
			let curIndex = state.currentPlayIndex;
			let lastIndex = musicResourecs.musicResourecs.length - 1;
			switch (type){
				case 'pre':
					curIndex == 0 ? commit('changePlayIndex',lastIndex) : commit('changePlayIndex',curIndex-1)
					break;
				case 'next':
					curIndex == lastIndex ? commit('changePlayIndex',0) : commit('changePlayIndex',curIndex+1)
					break;
			}
			//然后开始播放音乐
			commit('audioPlay')
		}
	}
}