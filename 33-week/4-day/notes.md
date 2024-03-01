# Functions, Data Types, and Lists in Python

## Functions

- A function definition consists of:
  - The def keyword
  - The name of the function
  - A list of parameters to the function enclosed in parentheses, ()
  - A colon, :, at the end of the line
  - One tab indentation for the block of code to run (one or more lines)

```py
def say_name(name):
    print(f"Hey there, {name}")
```

### Default Parameter Values

- Like JavaScript, Python can have default values for the parameters of its methods.

```py
def greeting(name, saying="Hello"):
    print(saying, name)

greeting("Monica")
# Hello Monica

greeting("Barry", "Hey")
# Hey Barry
```

- Parameters with default values must always come after parameters that do not have default values.
  - Otherwise, you will get a `SyntaxError`

### Keyword Arguments

Unlike JavaScript, Python has the built-in ability to specify arguments by name without resorting to destructuring. You can just write the name of the parameter and an equal sign before the value you pass as a parameter. By specifying the names of the arguments, you can provide them in any order.

```py
def greeting(name, saying="Hello"):
    print(saying, name)

greeting(name="Monica")
# Hello Monica

greeting(name="Barry", saying="Hey")
# Hey Barry

greeting(saying="Hey", name="Barry")
# Hey Barry
```

### Anonymous (lambda) Functions

- Akin to anonymous arrow functions in JS
- Meant to be one-liners

```js
const toUpper = s => s.toUpperCase();
```

```py
toUpper = lambda s: s.upper()
```

### Handling Extra Arguments (*args & **kwargs)

- Handle extra positional arguments with an `*`
  - By convention, it should be named `args`
  - It will collect any extra positional arguments in a *tuple*

```py
def add(a, b, *args):
  total = a + b
  for n in args:
    total += n
  return total

add(1, 2)  # Returns 3

add(2, 3, 4, 5) # Returns 14
```

- Handle extra keyword arguments with `**`
  - By convention, it should be named `kwargs`
  - It will collect any extra keyword arguments in a dictionary

```py
def print_names_and_countries(greeting, **kwargs):
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

print_names_and_countries("Hi",
                          Monica="Sweden",
                          Charles="British Virgin Islands",
                          Carlo="Portugal")
# Prints
# Hi Monica from Sweden
# Hi Charles from British Virgin Islands
# Hi Carlo from Portugal
```

## Data Types

### Sequences

- Ordered data type
- Has an index, starting at 0
- Includes: strings, lists, tuples, and ranges

### Collections

- Unordered data type
- Can't use indexes, we use keys instead
- Includes: dictionaries and sets

### Iterables

- Any data type that we can iterate over

### Lists

- Is this data type sequence or collection?
- Is this data type iterable?
