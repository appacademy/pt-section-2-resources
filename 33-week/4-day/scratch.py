def say_name(name):
    print(f"Hey there, {name}")

# say_name("Bobert")

def greeting(name, saying="Hello"):
    print(saying, name)

# greeting(name="Monica")
# # Hello Monica

# greeting(name="Barry", saying="Hey")
# # Hey Barry

# greeting(saying="Hey", name="Barry")
# # Hey Barry

def add(a, b, *args):
  total = a + b
  print(args)
  for n in args:
    print(n)
    total += n
  return total

# print(add(1, 2))  # Returns 3

# print(add(2, 3, 4, 5)) # Returns 14

def print_names_and_countries(greeting, **kwargs):
    print(kwargs)
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

# print_names_and_countries("Hi",
#                           Monica="Sweden",
#                           Charles="British Virgin Islands",
#                           Carlo="Portugal")
# Prints
# Hi Monica from Sweden
# Hi Charles from British Virgin Islands
# Hi Carlo from Portugal

# dic = {"Rick": "Cool", "Greg": 42, "Bob": 6}
# set1 = set()

# for i in 5.55:
#    print(i)

