/** Animal constructor **/
function Animal(name) {
	this.name = name || 'Anonymous';
}

/** Add a method to the Animal prototype**/
Animal.prototype.getName = function() {
	return this.name;
}

/** Cow constructor **/
function Cow(name) {
	 Animal.apply(this, arguments);
}

/** Inheritance **/
Cow.prototype = Object.create(Animal.prototype);
Cow.prototype.constructor = Cow;

/** Add a method to the Cow prototype**/
Cow.prototype.moo = function() {
	return 'Cow ' + this.getName() + ' says moo.'
}

//let's check
var burenka = new Cow('Burenka');
var noname = new Cow();

console.log(burenka.moo());
console.log(noname.moo());