# Printing
# print("Greg")

# Spacing and lack of semicolons
# if True:
#     print("It's true")
#     print("After If")

# Booleans and Boolean Logic
# True
# False
# and # &&
# or  # ||
# not # !
# not (a and b) == not a or not b

# Falsey values in Python
# None # undefined and/or null
# 0
# 0.0
# ""
# []
# ()
# {}
# set()
# range(0)

# Strings
# print("Greg")
# print('Isales')
# print('Greg says "Good job"')
# print(len('''
# This is a haiku
# haikus have three lines
# and something about syllables
#       '''))

# Comments in python
# single line comment

# def func(n):
#     """
#     Takes in a number and returns the number plus one
#     This is another line of comments
#     """
#     return n+1

# print(func(5))

# String Indexing
string_variable = "This_is_a_somewhat_longish_string"
# print(string_variable[0])
# print(string_variable[-5])
# print(string_variable[1:5])
# print(string_variable[:5])
# print(string_variable[1:])
# print(string_variable[1:-1])
# print(len(string_variable))
# # print(string_variable[40])
# print(string_variable[:40])

# String methods
# print(string_variable.upper())
# print(string_variable.isupper())
# print(string_variable.index("h"))
# print(string_variable.count("_"))
# print("Yoshi"*4)


# Formatting strings
first_name = "Greg"
last_name = "Isales"
print("My name is {0} {1}".format(first_name, last_name))
print(f"My name is {first_name} {last_name}")

score = 50
possible = 70

print("My score was: {:.2%}".format(score/possible))

