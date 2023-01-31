function changeScript (callback) {

	var scriptTag = document.getElementById('scriptTag')
	var scriptCheck = document.getElementById('scriptTag').getAttribute('src');

	var changeScriptText = document.getElementById('change_script_text');

	if (scriptCheck == './script/script.js') {

		var changeVar = 'jquery';

		scriptTag.setAttribute('src', './script/'+ changeVar +'.js');
		changeScriptText.innerText = "Change Script";

	} else {

		var changeVar = 'script';

		scriptTag.setAttribute('src', './script/'+ changeVar +'.js')
		changeScriptText.innerText = "Change JQuery";

	}

}

window.addEventListener('DOMContentLoaded', function(callback){

	document.getElementById('change_script').addEventListener('click', function(){

		changeScript();
		scriptTag.onload = callback;

	});

});