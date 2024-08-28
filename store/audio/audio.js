import musicResourecs from './musicResourecs.js';

let audio;
export default {
	state:{
		playStatus:false,
		currentPlayIndex:0,
		durationTime:100, //音频总时长
		currentTime:0, //当前播放时刻
		audioList:[]
	},
	mutations:{
		//监听
		addAudioEvent(state,dispatch){
			audio.onPlay(()=>{
				state.playStatus = true;
				let intervalID = setInterval(()=>{
					if(state.durationTime !== 0){
						clearInterval(intervalID);
					}
					state.durationTime = audio.duration;
				},500);
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
				dispatch('preOrNext','next');
				console.log("音频自然播放结束");
			})
			audio.onError(()=>{
				console.log("音频播放错误");
			})
			audio.onCanplay(()=>{
				// #ifdef MP-WEIXIN
				state.durationTime = audio.duration;
				state.currentTime = audio.currentTime 
				// #endif
			})
			audio.onTimeUpdate(()=>{
				// #ifdef H5
				audio.startTime = state.currentTime
				// #endif
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
		},
		//跳转播放
		audioSeek(state,pos){
			audio.seek(pos)
		},
		//获取音频列表
		getAudioList(state,aduioList){
			for (let item of aduioList) {
				state.audioList.push({
					id:item.id,
					audioName:item.name,
					singerName:item.singer.name,
					playStatus: 0 // 0为停止 -1为暂停 1为播放 
				})
			}
		}
	},
	actions:{
		init({commit,dispatch}){
			// 实例化api
			if(audio) return
			audio = uni.createInnerAudioContext();
			// #ifdef H5
			audio.src = musicResourecs.musicResourecs[0].src;
			// #endif
			commit('addAudioEvent',dispatch);
			//将数据放在List中
			commit('getAudioList',musicResourecs.musicResourecs)
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
			// #ifdef H5
			state.currentTime = 0;
			// #endif
			
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
		},
		//滑块滑动事件
		sliderToPlay({ state,commit },e){
			commit('audioSeek',e.detail.value)
			if(!state.playStatus){
				commit('audioPlay')
			}
		},
		//列表选择播放
		selectPlay({state , commit},id){
			let curIndex = musicResourecs.musicResourecs.findIndex(item => item.id === id);
			if(state.currentPlayIndex == curIndex){
				if(state.playStatus){
					commit('audioPause')
				}else{
					commit('audioPlay')
				}
				return
			}else{
				state.currentTime = 0;
				commit('audioStop');
			}
			commit('changePlayIndex',curIndex);
			commit('audioPlay')
		}
	}
}