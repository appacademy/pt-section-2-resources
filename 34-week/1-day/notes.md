# Built-in functions

Docs link:
https://docs.python.org/3.9/library/functions.html


---

## `sorted()`

`sorted()` sorts any iterable data type. It returns a list of every element in the iterable in sorted order (using [Timsort](https://en.wikipedia.org/wiki/Timsort)).

`sorted()` takes two optional keyword arguments:
- `key`: a function that takes a single argument and returns a key to use for sorting
- `reverse`: a boolean value, if `True` the iterable will be sorted in reverse order

```python=
names = ["JAMES", "julie", "Ana", "Ria"]
sorted_names = sorted(names)
print(sorted_names)

# ensure a case-insensitive sort with the `.lower` string method
# and sort in reverse order
sorted_names = sorted(names, key=lambda x: x.lower(), reverse=True)
print(sorted_names)
```

---

## `all()` and `any()`
`all()` returns `True` if *all* items in a collection are truthy or if the iterable is empty. It returns `False` if there is at least one falsey item.

`any()` returns `True` if there are *any* truthy items in the provided collection. It returns `False` if there are no truthy items or if the iterable is empty.

```python=
test = ["item", [], []]
print(any(test)) # True
print(all(test)) # False
```

all is "happy" if nothing inside is falsy,
any is "happy" if at least one thing is truthy


---

## Built-in functions: `filter()`
`filter()` takes in a function and an iterable as arguments and returns a *filter object*.

The returned collection includes only the items which, when the function parameter was applied to them, returned a truthy value.

`filter()` does not filter in place. It returns an entirely new object.

```python=
scores = [90, 86, 75, 91, 62, 99, 88, 90]
only_as = filter(lambda num: num >= 90, scores)
print(only_as)        # <filter object at 0x10546ad30>
print(list(only_as))  # [90, 91, 99, 90]
```

---

## Built-in functions: `map()`
`map()` takes in a function and an iterable as arguments and returns a *map object*.

`map()` transforms each value from the original iterable according to the provided function and returns them in a new object.

```python=
def get_grade(num):
    if (num >= 90):
        return "A"
    elif (num <90 and num >= 80):
        return "B"
    elif (num < 80 and num >= 70):
        return "C"
    elif (num < 70 and num >= 60):
        return "D"
    else:
        return "F"
scores = [90, 86, 75, 91, 62, 99, 88, 90]
print(map(get_grade, scores))  # <map object at 0x106faffa0>
grades = list(map(get_grade, scores))
print(grades)                  # ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'A']

```

---

## Built-in functions: `zip()`
`zip()` takes two iterables as arguments and returns a *zip object* that pairs values at corresponding indices.

You can typecast the *zip object* as a sequence of tuples or as a dictionary.

```python=
scores = [90, 86, 75, 91, 62, 99, 88, 90]
grades = ["A", "B", "C", "A", "D", "A", "B", "A"]
combined = zip(scores, grades)
combined_list = list(combined)
combined_dict = dict(combined_list)
print(combined)       # <zip object at 0x1023a9600>
print(combined_list)  # [(90, 'A'), (86, 'B'), (75, 'C'), (91, 'A'), (62, 'D'), (99, 'A'), (88, 'B'), (90, 'A')]
print(combined_dict)  # {90: 'A', 86: 'B', 75: 'C', 91: 'A', 62: 'D', 99: 'A', 88: 'B'}
```

## Convert `map()` to list comprehension

```python=
nums = [-5, 11, 10, 14]
mapped_nums = map(lambda num: num * 2 + 1, nums)

print(list(mapped_nums))  # [-9, 23, 21, 29]
```

---

## Convert `filter()` to list comprehension
```python=
nums = [-5, 11, 10, 14]

filtered_nums = filter(lambda num: num > 0, nums)

print(list(filtered_nums))  # [11, 10, 14]
```

---

## Iterating over Collections with `enumerate()`

The built-in function `enumerate()` gives us both an item and its index in a sequence/iterator.

`enumerate()` takes in a sequence and returns an enumerate object.

This object can be typecast as a sequence of tuples, where each tuple contains both an element and its index in a sequence/iterator.

```python=
items = ['a', 'b', 'c']

enumerated_items = enumerate(items)
print(enumerated_items)

enumerated_list = list(enumerated_items)
print(enumerated_list)

for i, element in enumerated_list:
    print(i, element)
```



---

## Built-in Function Practices (30 min)
Built-In Functions Quiz - 3 min
Adopted Cats - 5 min
Most Used Card - 5 min
Nested Sort - 5 min
Remove Duplicates - 5 min

---