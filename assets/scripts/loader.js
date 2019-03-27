var preLoader = {

	require: function(scripts, callback){
		this.loadCount = 0;
		this.totalRequired = scripts.lenght;
		this.callback = callback;

		for (var i = 0; i < scripts.length; i++) {
			this.writeElementScript(scripts[i]);
		}

	},
	loaded: function (){
		this.loadCount++;

		if (this.loadCount == this.totalRequired
			&& typeof this.callback == 'function')
			this.callback.call();
	},
	writeElementScript: function(src){
		var s = document.createElement('script');
		s.type = "text/javascript";
		s.async = true;
		s.src = src;
		s.addEventListener('load',()=> {this.loaded()},false);
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(s);
	}
}

preLoader.require([
	"assets/scripts/threeManager.js"
	],
	function(){
		console.log("loaded");
})



function loadFile({file,responseType}, callback){

	var rawFile = new XMLHttpRequest();
	rawFile.open("GET",file, false);
	rawFile.onreadystatechange = function(){
		
		if(rawFile.readyState === 4){
			if (rawFile.status === 200 || rawFile.status === 0){
				callback(rawFile.responseText);
			}
		}
	}
	rawFile.send(null);
}


