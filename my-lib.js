function jQuery(selector, context=document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this;
};

jQuery.prototype.each = function(fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
};

jQuery.prototype.click = function(fn){
	this.each(element=>element.addEventListener("click", fn));
	return this;
}

jQuery.prototype.setText = function(text){
	this.each(element => element.innerHTML = String(text));
}

const $ = (e) => new jQuery(e);