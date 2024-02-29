# Python Basics II: Electric Boogaloo

## Variables

### Duck-typing

_If it looks like a duck and quacks like a duck, then it must be a duck._

Duck typing is a programming style which avoids checking an object's "type" to figure out what it can do.

- Python uses _duck-typing_ as its fundamental approach
- This comes with several pros and cons
  - Pros:
    - Flexibility: You can use different objects interchangeably based on their behavior without worrying about their types.
    - Simplicity: You can simplify code by focusing on the required behavior rather than thinking of specific types, classes, and the relationships between them.
  - Cons:
    - Potential Runtime Errors: You might face errors related to missing methods or attributes, which may only appear at runtime. This can lead to unexpected behavior or crashes if an object doesn’t conform to the expected behavior.
    - Lack of Explicitness: You might make your code less explicit and more challenging to understand. The lack of explicit interface definitions might make it more difficult to grasp what behavior an object must exhibit.
    - Potential Maintenance Issues: You might have issues tracking which objects must exhibit certain behaviors. Behavior changes in certain objects may impact other parts of the code, making it harder to maintain, reason about, and debug.

### Assigning Variables

There's no keywords like `let`,`const`, or `var`necessary to create variables. Instead, the assignment of a value automatically declares a variable.

- We can reassign the value and change the type of a variable without any issues

```python
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

## Operators

- Python uses many of the same equality operators as JavaScript:
  - `>` (greater than)
  - `<` (less than)
  - `>=` (greater than or equal to)
  - `<=` (less than or equal to)
  - `==` (equal to)
  - `!=` (not equal to)

### Order of Operations

- In python, the equality operators are evaluated from left to right
- After that, the logical operators are evaluated in the following order:
  - `not`
  - `and`
  - `or`
- Just like in JavaScript, we can use parentheses to make adjustments to the default ordering

```python
print(not 4 == 5)   # ???
```

### Identity Operators

- `is` and `is not`

## Statements

### Conditional Statements and Control Flow

- 4 parts to an if statement in Python:
  - The `if` keyword
  - A condition that evaluates to `True` of `False`
  - A colon
  - Followed by an indented block of code

```python
if True:
    print("Heyooo")
```

- There's also an `elif` keyword that we'll use when we want to say `else if`
  - This follows the same formula as an _if_ statement
- There's an `else` keyword that's equivalent to else in JS
  - No conditional needed here

### While Loops

- 4 parts to a while loop in Python:
  - The `while` keyword
  - A condition that evaluates to `True` of `False`
  - A colon
  - Followed by an indented block of code

```python
count = 10
while count > 0:
  print(f"Counting down: {count}")
  count = count - 1
```

- Interrupting `while` loops:
  - We can use two keywords to interrupt the normal execution of `while` loops: `break` and `continue`
    - `break` will immediately get the code execution to exit the `while` loop
    - `continue` stops this iteration of code execution within the `while` loop, and jumps back to the start of the loop

### For Loops

- 6 parts to a `for` loop in Python:
  - The for keyword
  - A variable name
  - The in keyword
  - An iterable of some kind
  - A colon
  - Starting on the next line, an indented block of code (called the for clause)

```python
for i in range(5):
   print(i)
```

### Try/Except/Finally

- Akin to `try` `catch` `finally` blocks from JS
- The flow enters the try block and runs each line of code in order. If there are no issues, then it skips the except block entirely. However, if one line in the try-block fails then the flow immediately skips to the start of the except block without running any more code in the try-block.
- The finally block will always run, regardless of whether there was an exception or not.

```python
a = 321
try:
    print(len(a))
except:
    print('In the except block!')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
finally:
    print("All done")
```

### Pass keyword

- All statements that end in colons must be followed by an indented block of code.
- In the event we don't want to put anything in that block of code, we can use the `pass` keyword

```python
if True:
  pass
```