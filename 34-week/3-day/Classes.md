## Classes
### Classes are a combination of information and behavior. A blueprint that allows you to make objects with predefined attributes.

What is a Class?
- A class in Python is a blueprint for creating objects (instances)
- It encapsulates data (attributes) and behavior (methods) into a single entity

Think of it like JavaScript class construction: 
```js 
class Person { // Class Definition
	constructor(name, age) { // Class Constructor
	 
		this.name = name; // Class Attribute #1 
		this.age = age; // Class Attibute #2

		greet() { // Class Method #1
			return `Hello, my name is ${this.name}`
		}
	}
}

let person = new Person("John", 30); // Instance Creation 
console.log(person.greet()); // Output: Hello, my name is John
```

Defining a class in Python: 
In Python, we also define a class using the `class` keyword. Let's create a similar `Person` class in Python:
```python
class Person: # Class Definition
	def __init__(self, name, age): # Class Constructor -> always called `__init__`
		self.name = name # Class Attribute #1
		self.age = age # Classs Attribute #2
		
	def greet(self): # Class Method #1
		print(f"Hello, my name is {self.name}")
```

Key Points: 
- Class names should be Pascal Case (upper camel case) i.e. `MyClassName`
- The `__init__` method is a special method that we know of as a `constructor` method (aptly named in JavaScript), because that's exactly what it is! 
- `self` is a reference to the current instance of the class, similar to `this` in JavaScript. (doesn't have to be the name `self` but is named `self` by convention)


---

##### Creating an Instance of a Class:

- Creating an instance of a class in Python is straightforward
- Calling a method (last line) is the exact same as you would do in JavaScript
- Invoking a method requires arguments to be passed in (if needed)
- `self` does not need to be passed in, as `self` is a reference to the instance invoking the method
```python
person = Person("John", 30) # Instance Creation
person.greet() # Output: Hello, my name is John
```


---
##### Attributes and Methods:

Attributes: 
- Attributes are variables that belong to the instance
- In JavaScript, you add properties to `this` inside the constructor. In Python, you do the same using `self` 

Methods:
- Methods are functions that belong to the class 
- In Python (similar to JS), methods are defined directly within the class. 

---
##### Encapsulation and Data Hiding

Python does not enforce strict access control, but you can signal that a method or attribute is private by prefixing it with an underscore (`_`).
```python
class Person: # class construction 
    def __init__(self, name, age):
        self._name = name    # Protected attribute
        self.__age = age     # Private attribute

    def get_age(self):
        return self.__age
    # outside of class construction 


person = Person("Anthony", 25)


class People(Person):
	def __init__(self, name, age):
        self._name = name    # Protected attribute
				             # Private attribute

    def get_age(self):
        return self.__age
    # outside of class construction 



```

In this example:
- `_name` is intended to be protected.
- `__age` is intended to be private (name mangling occurs, making it harder to access).

**Protected attributes/methods** are:
- Are Intended to be used within the **class and its subclasses**
- They are **not meant to be accessed directly from outside the class**, but this is more of a convention than a strict rule
- Protected attributes are indicated by a **single underscore** (`_`) prefix.

- **Convention**: By convention, a single leading underscore (`_attribute`) indicates that the attribute or method is intended for internal use.

- **Accessibility**: These can still be accessed and modified from outside the class, but it's a signal to the programmer that it should not be done.


**Private attributes/methods** are:
- Are Intended to be used **only within the class they are defined in**
- Not meant to be accessed from **outside the class or by subclasses**
- Private attributes are indicated by a double underscore (`__`) prefix.

- **Convention and Name Mangling**: A double leading underscore (`__attribute`) triggers name mangling, which changes the name of the attribute to include the class name. This makes it harder to access the attribute from outside the class.
- **Accessibility**: Private attributes can still be accessed from outside the class, but it requires knowledge of the name mangling.

What is name mangling? 
Name mangling simply means that an attribute with two leading underscores is textually transformed to include the class name along with the attribute name. 

For example: `self.__name` becomes `_ClassName__name`

Use Cases
1. Protected Attributes/Methods:
    - Use when you want to allow subclass access but signal that the attribute/method is for internal use within the class hierarchy.
    - Example: Internal utility methods or helper functions that might be useful for subclasses.

2. Private Attributes/Methods:
    - Use when you want to restrict access strictly to the class itself.
    - Example: Sensitive data or implementation details that should not be exposed or overridden.


---
##### Dunder Methods:

Dunder methods ("short for double underscore" methods) in Python, also known as magic methods or special methods, are a set of predefined methods that you can use to enrich your classes with special behaviors. 

These methods have names that start and end with double underscores i.e.: 
- `__init__`, `__str__`, `__repr__`


 **Conventional Use Cases for Dunder Methods**
 
1. Object Initialization: `__init__`
    - Called when an instance of the class is created.
    - Used to initialize the object's attributes.

2. Object Representation: `__repr__` and `__str__`
- `__repr__`: Provides an official string representation of the object, useful for debugging.
- `__str__`: Provides an informal string representation, useful for printing and displaying to end users.


Examples in practice:
Example 1: Custom String Representation
```python
class Book:
	__slots__ = ['title', 'author']
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"'{self.title}' by {self.author}"

    def __repr__(self):
        return f"Book(title='{self.title}', author='{self.author}')"

```

---
Additional Info (Nice to know):

The `__slots__` attribute: 

The `__slots__` attribute in Python is a way to optimize memory usage and potentially improve the performance of attribute access in classes

By default, Python stores object attributes in a dynamic dictionary (`__dict__`). This allows for flexible attribute assignment but comes with memory overhead.

 Using `__slots__` in a Class
1. Define `__slots__` as a list or tuple of attribute names that you expect instances of the class to have.
2. Avoid using `__dict__` and `__weakref__` attributes, as `__slots__` removes the per-instance dictionary unless explicitly included.