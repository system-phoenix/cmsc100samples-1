function cube(n){
	return n*n*n;
}

var cube = function(n){
	return n*n*n;
};

alert(cube(2));

function foo1(a){
	a = 100;
	console.log("Inside the function a is: " +a);
}

function foo2(myObject){
	myObject.fname = "John";
}

function foo3(myObject){
	myObject = {fname: "Jane", lname: "Dizon", age: 25};
}

var person = {
	fname:"Juan",
	lname:"dela Cruz",
	age:50
};

function student(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	
	this.changeName = changeName;
	this.updateAge = updateAge;
}

function changeName(newFname, newLname){
	this.fname = newFname;
	this.lname = newLname;
}

function updateAge(newAge){
	this.age = newAge;
}
