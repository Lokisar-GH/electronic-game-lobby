 const Store = require('electron-store');
 window.runningEngineCount=0
 window.networkBuffer=""
 const storage=new Store();
 if (storage.has('userVolume')){
	 window.userVolume=storage.get('userVolume')}
	 else{
		 window.userVolume=50;
	 }

if (storage.has('userFXVolume')){
	window.userFXVolume=storage.get('userFXVolume')}
else{
	window.userFXVolume=16;
	}

if (storage.has('userNotifVolume')){
	window.userNotifVolume=storage.get('userNotifVolume')}
else{
	window.userNotifVolume=16;
	}
