# Destructuring assignment
The **destructuring assignment** is a cool feature that came along with **ES6**. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

Consider an example of 
```javascript
let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
```
We can see that when we want to extract data from an array, we have to do the same thing over and over again.

The ES6 destucturing assignment makes it easier to extract this data.


### Basic Array Destructuring

For example instead of going through that repetitive process, we'd do this:

```javascript
let introduction = ["Hello", "I" , "am", "Sarah"];
let [greeting, pronoun] = introduction;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
```
Or
```javascript 
let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
```


### Declaring Variables before Assignment
```javascript 
let greeting, pronoun;
[greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
```
> Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second variable in the array, and so on.


### Skipping Items in an Array

If we want to get only few of the items, and skip some items in the middle, we can achieve in this manner: 

```javascript 
let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
```
So we have skipped *I* and *am* by putting comma and leaving empty, after greeting.

Another example: 
```javascript 
let [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(pronoun);//"I"
console.log(name);//"Sarah"
```


### Assigning the rest of an array

We can assign some of the items in the array to variables, and the rest of the array to a variable.

```javascript 
let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]
```

Also, we can skip some of the items in the array

```javascript 
let [,greeting, , ...intro] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"I"
console.log(intro);//["Sarah"]
```


### Destructuring Assignment with Functions
We can also extract data from an array returned from a function.

```javascript 
function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
} 
let [greeting,pronoun] = getArray();

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
```
> **Note**: So, it looks for the order of items on LHS and RHS arrays, and then assigns the variables with the same order in both arrays.

Consider another example: 

```javascript 
function getItems() {
    return null;
}

let [x = 1, y = 2] = getItems();

Uncaught TypeError: getItems is not a function or its return value is not iterable
```

The return type should be iterable. For example, an **array** or **string**.

Look at another example:

```javascript 
function getItems() {
    return "a ";
}

let [x = 1, y = 2] = getItems(); // x = a, y = ' ';
```

### Using Default Values

Default values can be assigned to the variables just in case the value extracted from the array is *undefined*. 

```javascript 
let [greeting = "hi", name = "Sarah"] = ["hello"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
```
Since, nothing is passed for the *name* on the RHS array, it takes the default value "Sarah".


### Swapping Values using the Destructuring Assignment

```javascript 
let a = 3;
let b = 6;

[a,b] = [b,a];

console.log(a);//6
console.log(b);//3
```
Another example: 

```javascript 
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```
So, on the LHS the position of the items will stay and on the RHS the values. That is:
```javascript  
[arr[2], arr[1]] = [2, 3];
```


### Object Destructuring

As shown in array destructuring, the long and tedious way of getting items from an array and setting them to variables can be seen in  **objects**

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
```


### Basic Object Destructuring

We can achieve the same result with object destructuring

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name, country, job} = person;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
```
Or it is also valid to assign variables to an object that haven't been declared:

```javascript 
let {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
```


### Variables declared before being assigned
 
Variables in objects can be declared before being assigned with destructuring.

```javascript
let person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
let name, country, job;

{name, country, job} = person;

console.log(name);// Error : "Unexpected token ="
 ```
Wait, what just happened?! Oh, we forgot to add () before the curly brackets.

In the case of objects, it throws an error if you don't enclose the assingment with **( )** because the LHS **{ }** is read as block scope. When we enclose with **( )** the code inside is read as an expression.

 ```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;

({name, country, job} = person);

console.log(name);//"Sarah"
console.log(job);//"Developer"
```


It is also important to note that when using this syntax, the () should be preceded by a semicolon. Otherwise it might be used to execute a function from the previous line.


> **Note**: The variable names should be the same as the property keys in the object, otherwise, we'll get *undefined*.



```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name, friends, job} = person;

console.log(name);//"Sarah"
console.log(friends);//undefined
```


### Using a new Variable Name

If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name: foo, job: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Developer" 
```


### Using Default Values

Default values can also be used in object destructuring, just in case a variable is undefined in an object it wants to extract data from:

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"
console.log(friend);//"Annie"
```

We can also set default values when we assign values to a new variable:

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name:foo = "myName", friend: bar = "Annie"} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Annie" 
```

So  *name* was extracted from person and assigned to *foo*. *friend*, on the other hand, was *undefined* in *person*, so the new variable *bar* was assigned the default value.


### Computed Property Name

Computed property name is another object literal feature that also works for destructuring. You can specify the name of a property via an expression if you put it in square brackets:

```javascript 
let prop = "name";

let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(foo);//"Sarah"
```


### Combining Arrays with Objects

```javascript 
let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

let {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]
```


### Nesting in Object Destructuring

```javascript 
let person = {
    name: "Sarah",
    place: {
        country: "Nigeria", 
        city: "Lagos"
    }, 
    friends : ["Annie", "Becky"]
};

let {name:foo,
        place: {
            country : bar,
            city : x
        }
    } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"
```

### Rest in Object Destructuring

The rest syntax can also be used to pick up property keys that are not already picked up by the destructuring pattern.

```javascript 
let person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};

let {name, friends, ...others} = person;

console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}
```
Here, the remaining properties whose keys where not part of the variable names listed were assigned to the variable others. The rest syntax here is ...others. others can be renamed to whatever variable you want.

### Object Destructuring and Functions

```javascript 
function person({name: x, job: y} = {}) {
    console.log(name);
}

person({name: "Michelle"});//"Michelle"
person();//undefined
person(friend);//Error : friend is not defined
```

Notice the **{ }** on the right hand side of the parameters object. It makes it possible for us to call the function without passing any arguments. That is why we got undefined. If we remove it, we'll get an error message.


We can also assign default values to the parameters:

```javascript 
function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(name);
}

person({name});//"Sarah"
```

### Some more array/object nested examples

#### Example #1

```javascript 
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id; // 42
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}
```

When you want to access to a value inside nested object, the way of getting the value should be the same as the original object. That is:

```javascript 
const foo = {
    bar: {
        name: "Superman"
    }
};
// if you want to get the "name" you should write the same way

let {bar: {name}} = foo;

console.log(name); // Superman
```
or
```javascript 
const foo = {
    bar: {
        name: "Superman"
    }
};
// if you want to get the "name" you should write the same way

let {bar: {name: heroName}} = foo;

console.log(heroName); // Superman
```
> **Note**: If you try to access to "bar" or "name" it will throw an error.
**Uncaught ReferenceError**: bar/name is not defined

### Nested objects and array destructuring

#### Example #2

```javascript 
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      title: 'JavaScript-Umgebung'
    }
  ]
};

let {
  title: englishTitle, 
  translations: [
    {
       title: localeTitle, 
    },
  ],
} = metadata;

console.log(englishTitle); //Scratchpad
console.log(localeTitle);  //JavaScript-Umgebung
```

> **Note**: As you see the structure is the same and parameter key names also

#### Example #3
Print *Tom Jones* and *Howard Jones*

```javascript 
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

//Since the 'people' is an array we will use the array destructuring first.

let [, {name: firstBrother, family: {brother: secondBrother}}] = people;
console.log(firstBrother, secondBrother); // Tom Jones Howard Jones
```