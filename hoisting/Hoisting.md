# Hoisting
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

In another words, the js engine allocates memory for all declarations before initializing them. The declarations with *var* are being auto-asigned to *undefined*. Additionally, *let* and *const* are also being hoisted, but they are not available until initialization. And the all space until initialization of *let* and *const* are called [Temporal Dead Zone](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)

> **Note**: JavaScript only hoists declarations, not the initializations.

#### Variable Hoisting

**Example #1**
```javascript
a = 2;

var a;

console.log( a ); // outputs 2
```
The above code is the same as 
```javascript
var a;

a = 2;

console.log( a );
```

**Example #2**
```javascript
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num;
num = 6; 
console.log(num)
```
The above code is
```javascript
var num; // Declaration
console.log(num);
num = 6; // Initialization
console.log(num);
```
#### Function Hoisting
You can call a function before it is declared.
> Function declarations are hoisted with their initializations.
```javascript
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/
```
**Example #1**
```javascript
foo();

function foo() {
	console.log( a ); // undefined

	var a = 2;
}
```
The above code is interpreted by js engine like
```javascript
function foo() {
    var a;
    console.log( a ); // undefined

    a = 2;
}
foo()
```
**Function expressions** are not hoisted with their initializations.

**Example #2**
```javascript
foo(); // Uncaught TypeError: foo is not a function;
var foo = function bar() {
	// ...
};
```
The code above is being translate to
```javascript
var foo;
foo();
foo = function () {
    var bar = ...
}
```
Or

**Example #3**
```javascript
foo(); // Uncaught TypeError: foo is not a function;
var foo = function () {
	// ...
};
```
```javascript
var foo;
foo();
foo = function () {
    
}
```
Or

**Example #4**
```javascript
foo(); // Uncaught TypeError: foo is not a function;
var foo = () => {
	// ...
};
```
```javascript
var foo;
foo();
foo = () => {
    
}
```
#### Let and const
Normally, when you search for let and const, the answer is they are not being hoisted, however, they are being hoisted
**Example #1**
```javascript
//TEMPORAL DEAD ZONE
//TEMPORAL DEAD ZONE
//TEMPORAL DEAD ZONE
console.log(a) // Uncaught ReferenceError: a is not defined
let a = 3;
```
**Example #2**
```javascript
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); //undefined
let a = 3;
```

####Video
- https://www.youtube.com/watch?v=Fnlnw8uY6jo&t=4s


####Links
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
- https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/ch4.md