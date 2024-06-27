### Difference in Objects/Dictionaries in Python vs. JavaScript

There are some key differences in Python Objects (compared to JavaScript Objects):

### What is an Object in Python?

In Python an Object is:
- An instance of a class (which defines the structure and behavior of objects)

A Python Object has the following properties:
- Attributes and methods are defined within the class
- Attributes and methods can be accessed using dot notation

Similarities between Python Objects and JavaScript Objects: 
- Key-value storage: 
	- Both JavaScript objects and Python dictionaries store data as key-value pairs, though Python objects (instances of classes) are more than just key-value stores
- Dot Notation: 
	- Both use dot notation to access properties/attributes and methods


Python's class-based system offers a more organized and meaningful way to define and work with objects, emphasizing encapsulation and inheritance.


What is the the difference between **Python Dictionaries and Objects**, and how does this tie into classes?:

Python Objects: 
- Instances of classes 
- Consists of Attributes (Variables and Methods)
- Attributes can be accessed using dot notation

Python dictionaries: 
	Syntax and use:
		- Built-in data structure in Python that stores data in key-value pairs
		- Primarily used for mapping and lookup operations
		- Constructed using curly braces or using the `dict()` constructor
	Keys and Values: 
		- Keys must be immutable types (strings, numbers, tuples)
		- Values can be of any type
	Access: 
		- Access using keys (bracket notation) -> `obj["key"]`

Summary: 
- Dictionaries in Python are used for storing and retrieving data via key-value pairs, similar to JavaScript Objects in their basic form. 
- Objects (instances of classes) in Python are more structured and meaningful, encapsulating both data and behavior, and following object-oriented principles. 