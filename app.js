/**
 * Created by wilson.campusano on 10/30/2014.
 */

var isNotEmpty = function(str){
	var s = str.trim();
	var result =s !== '';
	return result;
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
	giveMeInputTextElement().value='';
};

var giveMeUlList = function (){
	return document.getElementById('ul_message_list');
};

var giveMeInputTextElement =  function (){
	return document.getElementById('input_message');
};

var giveMeAddButtonElement = function (){
	return document.getElementById('btn_add_message');
};

var giveMeInputTextContent  = function (){
	return giveMeInputTextElement().value;
};

var giveMeEmptyMessageElement = function(){
	return document.getElementById('empty_message');
};


var  notifyInputError = function() {
	var inputElement = giveMeInputTextElement();
	inputElement.classList.add('input-error');
};

var notifyNoInputError = function(){
	var inputElement = giveMeInputTextElement();
	inputElement.classList.remove('input-error');
};

var addMessageToList = function (){
	notifyNoInputError();
	var inputText = giveMeInputTextContent();
	if(isNotEmpty(inputText)){
		addLiElementToList(buildLiMessage(inputText));
		giveMeEmptyMessageElement().setAttribute('hidden','hidden');
		return;
	}else{
		notifyInputError();
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
	giveMeAddButtonElement()
			.addEventListener('click', onClick);

	giveMeInputTextElement()
			.addEventListener('keyup', onKeyUpEnter);
	giveMeInputTextElement().focus();
};



(function(){
	initializeApp();
})();