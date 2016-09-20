NodeList.prototype.addEventListener = function(action, method){
	var i = -1;

	while(++i < this.length){
		this[i].addEventListener(action, method);
	}
}

NodeList.prototype.toArray = function(){
	var i = -1;
	var index = 0;

	var resul = []

	while(++i < this.length){
		resul.push(this[i]);
	}

	return resul;
}