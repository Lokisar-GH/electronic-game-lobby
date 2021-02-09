window.isPlaying=false
function playSound(file='title.mp3',loop=false){
	window.audiovolumeFade=0
	
	if(window.isPlaying)
	{
		window.audioTimer = setInterval(_audiofade, 30,file,loop);
	}
	else{	
	window.audio = new Audio('assets/'+file);
	window.audio.addEventListener("loadeddata", function() {
		window.audio.play();
		window.isPlaying=true
		if(loop){
			window.delay=window.audio.duration*1000-20
			window.audioLoop=setTimeout(_audioLoop, window.delay,file);
			}
		});
	}
	
}

function stopSound(){
	window.audioTimer = setInterval(_audiostop, 30);
}
function _audioLoop(file){
	
	window.audio = new Audio('assets/loop_'+file);
	window.audio.addEventListener("loadeddata", function() {
		window.audio.play();
		window.isPlaying=true
	
		window.delay=window.audio.duration*1000-20
		window.audioLoop=setTimeout(_audioLoop, window.delay,file);
	});
	console.log("audioloop fired"+window.audioLoop)
}
function _audiofade(file,loop){
	if (window.audiovolumeFade>=20){
		clearInterval(window.audioTimer);
		window.audio.pause()
		clearTimeout(window.audioLoop);
		console.log("audio fade fired")	
		loading(false)
		window.isPlaying=false;
		playSound(file,loop)
	
	}
	else{
		//console.log('v fade val'+window.audiovolumeFade)
		
		window.audio.volume-=0.0475
		window.audiovolumeFade+=1
	}
	
}

function _audiostop(){
	if (window.audiovolumeFade>=20){
		clearInterval(window.audioTimer);
		window.audio.pause()
		window.isPlaying=false
		window.audio.volume=1
	}
	else{
		//console.log('v fade val'+window.audiovolumeFade)
		
		window.audio.volume-=0.0475
		window.audiovolumeFade+=1
	}
	
}

playSound()
