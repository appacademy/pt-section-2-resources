class Duck:
    def swim(self):
        print("The duck is swimming")

    def fly(self):
        print("The duck is flying")

class Swan:
    def swim(self):
        print("The swan is swimming")

    def fly(self):
        print("The swan is flying")

class Greg:
    def swim(self):
        print("Greg is drowning")

    def fly(self):
        print("Greg is falling")

birds = [Duck(), Swan(), Greg()]

# for bird in birds:
#     bird.fly()
#     bird.swim()

stringy = "This is a cool string"
listical = [3, 2, 1231, 423124, 8]
dic = {"Bobert": 2, "Kevin": 16, "Frank": 1000}

# print(sorted(stringy))
# print(sorted(listical))
# print(sorted(dic))

# a = 17
# print(a)         # => 17
# a = 'seventeen'
# print(a)

# print(not 4 == 5)

# count = 10
# while count > 0:
#   if count == 5:
#     count -= 1
#     continue
#   print(f"Counting down: {count}")
#   count = count - 1

# print("ALL DONE")

# for i in range(len(stringy)):
#    char = stringy[i]
#    print(char, i)

# a = 321
# try:
#     print(len(a))
# except:
#     print('In the except block!')

#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))
# finally:
#     print("All done")

# if False:
#     pass
# if True:
#     print("Hii")