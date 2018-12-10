# pulya10c-2018Q3

ðîëèê 
https://youtu.be/JHh0Y7LHfwI
ñëàéäû 
https://pulya10c.github.io/Presentation-2018Q3/index.html

Òðàíñêðèïöèÿ:


Data types in JavaScript

Hello. My name is Oleh and today I’d like to tell you about data types in JavaScript. There are seven basic data types in Java script in our days, of those six are primitives and one is complex. They are: boolean, number, string, null, undefined, symbol and object. Let’s look at them in details.

Boolean 

Boolean is a Standard type of variable, it has only two values true or false. Type Boolean often used to store yes or no value. In addition, data type Boolean is a result of comparing two variables

Null

Null is a special type that can take only one value. In JavaScript it means that the value has the sense of 'empty' or 'value unknown'. For example, the age of somebody is unknown.

Number

In JavaScript the data type Number is used for integers and floating-point.
All numbers in the JavaScript are stored in 64-bit format. In majority of the programming languages division by zero is prohibited. In JavaScript this problem was solved mathematically correct. There is a special value in JavaScript called Infinity (generated as a result of division by zero) and NaN (Not-A-Number - calculation error). Any operation with NaN will return NaN. Infinity value could be negative. A very big number could be also called infinity.
Undefined
Like Null, Undefined is a special data type which means the value is not defined. If a variable was initiated but not declared, its value will be Undefined. If the function doesn’t return anything, the output of this function will be Undefined.
 But usually it is impossible to assign an Undefined value to a variable. 

String

There is no separate data type for char or symbol like in some other programming languages. Strings can be defined using single or double quotes and can contain some special symbols (\n, \f, \b, \r, \t).

Symbol

Symbol is a new data type in ECMAScript 6. A symbol is a unique primitive value that can be used as a key for a property of an object.

Object

Object is a special complex data type. It is used for declaration of the data collections and other complex entities. Objects are declared using curly brackets.

Typeof

To check the type of a variable, a method Typeof is used.

Summary

There are seven basic types in JavaScript:

•	number for numbers of any kind: integer or floating-point.
•	string for strings. A string may have one or more characters, there’s no separate single-character type.
•	boolean for true/false.
•	null for unknown values – a standalone type that has a single value null.
•	undefined for unassigned values – a standalone type that has a single value undefined.
•	object for more complex data structures.
•	symbol for unique identifiers.
The typeof operator allows us to see which type is stored in the variable.
For null returns "object" – that’s an error in the language, it’s not an object in fact.

Thanks for your attention and let data types be with you!