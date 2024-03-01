# print(1 and 0) # False
# print(1 and 2) # True
# print(0 and "") # False
# print([] and 1) # False
# print(0 or 5) #True
# print("" or 0) # False
# print(10 or 0) # True
# print(10 or 5)  # True

# def say_name(name):
#     print(f"Hey there, {name}")

# say_name("Bob")

# def greeting(name, saying="Hello"):
#     print(saying, name)

# greeting(name="Monica")
# # Hello Monica

# greeting(name="Barry", saying="Hey")
# # Hey Barry

# greeting(saying="Hey", name="Barry")
# # Hey Barry

def add_two(n1, n2=100):
    print(f"n1: {n1}, n2: {n2}")
    return n1 + n2

# print(add_two(20))
# print(add_two(25, 30))
# print(add_two(n1=30, n2=50))
# print(add_two(n2=45, n1=30))
# print(add_two(n1=40))

# def add(a, b, *args):
#   total = a + b
#   for n in args:
#     print(n)
#     total += n
#   return total

# print(add(1, 2))  # Returns 3

# print(add(2, 3, 4, 5)) # Returns 14

def print_names_and_countries(greeting, **kwargs):
    print(kwargs)
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
