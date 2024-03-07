class Dog:

    age = 1

    def __init__(self, name, breed, owner="Greg"):
        self.name = name
        self.breed = breed
        self._owner = owner

    def bark(self):
        print(f"{self.name} barks! Woof woof!")

    @staticmethod
    def roll_over():
        print("The dog rolls over.")

    @classmethod
    def dog_factory(cls, names):
        dogs = [cls(name, "Golden") for name in names]
        [dog.bark() for dog in dogs]
        return dogs

    @property
    def owner(self):
        return self._owner

    @owner.setter
    def owner(self, new_owner):
        print(f"Updating {self.name}'s owner to {new_owner}")
        print(f"Just kidding, {self.name} is not up for adoption")

    @owner.deleter
    def owner(self):
        print("Hey you can't do that!")



yoshi = Dog("Yoshi", "Golden")
# print(yoshi.name, yoshi.breed, yoshi.owner)
# yoshi.bark()
# # Dog.bark(yoshi)
# yoshi.owner = "Bad owner"
# print(yoshi.owner)
zelda = Dog("Zelda", "Cattle Dog", owner="Oren")
# print(yoshi.age) # 1
# print(zelda.age) # 1
# print(Dog.age) # 1
yoshi.age = 10
# print(yoshi.age) # 10
# print(zelda.age) # 1
# print(Dog.age) # 1
Dog.age = 3
# print(yoshi.age) # 10
# print(zelda.age) # 3
# print(Dog.age) # 3

# print(Dog.dog_factory(["Mario", "Bowser", "Luigi"]))
# yoshi.roll_over()

# print(yoshi.owner)
# yoshi.owner = "Chris"
# print(yoshi.owner)
# del yoshi.owner
# print(dir(yoshi))

from datetime import datetime

# our decorator, which takes in a callback function
def timer(func):

    # define the wrapper function that we're going to return
    def wrapper(*args, **kwargs):
        # get current time before function call
        before_time = datetime.now()

        # invoke the callback
        val = func(*args, **kwargs)
        # log the return value of the function
        print(val)

        # get current time after function call
        after_time = datetime.now()

        # calculate total time
        total = after_time - before_time

        # return the total time
        return total

    # decorator returns the wrapper function object
    return wrapper

@timer
def my_function():
    return "hello"

# my_func = timer(my_function)

# print(my_func())

# print(my_function())

@timer
def my_function_args(name):
    return f"hello {name}"

@timer
def my_sum(sum1, sum2):
    return sum1 + sum2

# print(my_function_args("greg"))
# print(my_sum(3, 4))