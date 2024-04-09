import musicResourecs from './musicResourecs.js';

let audio;
export default {
	state:{
		playStatus:false
	},
	getters:{
		
	},
	mutations:{
		//监听
		addAudioEvent(state){
			audio.onPlay(()=>{
				state.playStatus = true
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
		audioPlay(){
			audio.src = musicResourecs.musicResourecs[1].src;
			audio.play()
		},
		// 暂停方法
		audioPause(){
			audio.pause()
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
		}
	}
}