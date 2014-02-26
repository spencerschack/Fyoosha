window.Fyoosha = window.Fyoosha || (function() {

	function loadScript(src) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		document.head.appendChild(script);
	}

	if(!window.jQuery) {
		loadScript("//code.jquery.com/jquery-2.1.0.min.js");
	}

	return this;

}).call({});