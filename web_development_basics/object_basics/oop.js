function Person(name) {
	this.name = name;
	this.greeting = function() {

		console.log('Hi! I\'m ' + this.name + '.');
	};
}

let p1 = new Person("Murda Shewrote");
p1.greeting();
