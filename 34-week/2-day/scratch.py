# dic1 = {"Greg": 42, (1, 2): "Some values", 3.0: ["a", "b"], True: False, None: {}, 3: set()}
# print(dic1[(1, 2)]) # Some values
# print(dic1[3])
# print(dic1[3.0])
# print(dic1[True])
# print(dic1)

# dic2 = dict(greg=42, chris=100, edward=1000)
# print(dic2)

# dic3 = dict([("one", 1), ("two", 2), ("three", 3)])
# print(dic3)

# my_dict = {'one':1, 'two':2, 'three':3}
# # print(my_dict.one) #AttributeError: 'dict' object has no attribute 'one'
# print(my_dict['one']) #1
# # print(my_dict['new']) # KeyError: 'new'
# print(my_dict.get('new', None)) # None

# print(my_dict.get('one', None))
# print(my_dict.get('banana', "Nope!"))

# my_dict = {
#     "word": "cooool",
#     1: "one",
#     False: 42,
#     ("tuple", "keys"): ["lists", "can", "be", "values", "not", "keys"],
#     None: {"key": "value"}
# }

# my_dict[1] = "two" # Updates value
# print(my_dict[1]) # "two"
# my_dict["new_key"] = "new_value" #Adds key/value
# del my_dict["word"] # Deletes key/value
# print(my_dict) # I promise, all the changes are there!

# my_dict = {'one':1, 'two':2, 'three':3}

# squares = {x: my_dict[x]**2 for x in my_dict}

# squares1 = {x: y**2 for x, y in my_dict.items() }

# print(squares)
# print(squares1)

# my_list = [1, 2, 3, 4, 5, 5]
# print(set(my_list))    # {1, 2, 3, 4, 5}
# my_string = "hello"
# print(set(my_string))  # {'l', 'h', 'o', 'e'}
# print(set(["hello"])) # {'hello'}
# my_tuple = (1, 1, 1, 2, 3)
# print(set(my_tuple))   # {1, 2 ,3}
# my_dict = {"hello": "value", "goodbye": "value1"}
# print(set(my_dict))    # {'goodbye', 'hello'}

# evens = {x for x in range(10) if x % 2 == 0}
# print(evens)

# union of two sets
a = {1, 2, 3}
b = {3, 4, 5}
c = a | b
print(c)       # {1, 2, 3, 4, 5}
print(a.union(b))  # {1, 2, 3, 4, 5}
print(a & b) # {3}
print(a - b) # {1, 2}
print(b - a) # {4, 5}
print(a ^ b) # {1, 2, 4, 5}
print(dir(a))