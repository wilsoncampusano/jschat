/**
 * Created by wilson.campusano on 10/30/2014.
 */

var isNotEmptyOrUndefined = function(str){
	var s = str.trim();
	return (s !== undefined || s !== '');
};

var buildLiMessage = function (text){
	var li = document.createElement('li');
	li.textContent =  text;
	return li;
};

var addLiElementToList = function (liElement){
	var ulList = giveMeUlList();
	ulList.appendChild(liElement);
};

var cleanInputText = function (){
	giveMeInputText().value='';
};

var giveMeUlList = function (){
	return document.getElementById('ul_message_list');
};

var giveMeInputText =  function (){
	return document.getElementById('input_message');
};

var giveMeAddButton = function (){
	return document.getElementById('btn_add_message');
};

var giveMeInputTextContent  = function (){
	return giveMeInputText().value;
};

var giveMeEmptyMessageElement = function(){
	return document.getElementById('empty_message');
};


var addMessageToList = function (){
	var inputText = giveMeInputTextContent();
	if(isNotEmptyOrUndefined(inputText)){
		addLiElementToList(buildLiMessage(inputText));
		giveMeEmptyMessageElement().setAttribute('hidden','hidden');
		return;
	}
};

var onClick = function onClick(event){
	addMessageToList();
	cleanInputText();
};

var onKeyUpEnter = function (event){
	var ENTER_CODE = 13;
	if(event.keyCode === ENTER_CODE){
		addMessageToList();
		cleanInputText();
	}
};

var initializeApp = function(){
	giveMeAddButton()
			.addEventListener('click', onClick);

	giveMeInputText()
			.addEventListener('keyup', onKeyUpEnter);
};



(function(){
	initializeApp();
})();