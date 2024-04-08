import musicResourecs from './musicResourecs.js';

let audio;
export default {
	state:{
		num: musicResourecs.musicResourecs[0].name
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		init(){
			// 实例化api
			if(audio) return
			audio = uni.createAudioContext();
		}
	}
}