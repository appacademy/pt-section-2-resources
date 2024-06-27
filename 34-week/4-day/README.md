# `S3W34D4`

## Decorators

A function returning another function, usually applied as a function
transformation using the @wrapper syntax.

The decorator syntax is merely syntactic sugar, the following two function
definitions are semantically equivalent

```py
def staticmethod(f):
    def inner():
        print(f())
    return inner

def f():
    pass

func = staticmethod(f)
func()

#-------------------

@staticmethod
def f():
    pass

f()
```

```py
# basic decorators

def greeting_decorator(greeting_func):
  # 1. decorator function intakes a function to invoke
  # 2. wrapper function is defined
  def greeting_wrapper(name):
    # 3. code to run
    # 4. decorator functions argument is invoked
    print(f'{greeting_func()}, {name}!')
  # 5. wrapper function is returned
  return greeting_wrapper

def hello():
  return 'Hello'

print("default func:", hello) # <function hello at 0x7fe04abf6af0>
print(dir(hello)) # will show a list of properties in including the __closure__ property.
print("default func is closure?:", hello.__closure__) # None

hello = greeting_decorator(hello)
print("closure func:", hello)
# <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
print("closure func closure:", hello.__closure__)
# (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
print("closure func closure contents:", hello.__closure__[0].cell_contents)
# <function hello at 0x7f3125a26af0>

# syntactic sugar for howdy = greeting_decorator(howdy)
@greeting_decorator
def howdy():
  return 'Howdy'

print('howdy decorated:', howdy)
```

```py
# builtin class decorators
# @property getter, setter, deleter

# no decorators
class Dog:
  def __init__(self):
    self._sound = 'woof'

  def get_sound(self):
    return self._sound

  def change_sound(self, new_sound):
    self._sound = new_sound

  def del_sound(self):
    del self._sound

my_dog = Dog()

print(my_dog.get_sound())
print(my_dog.change_sound('bark'))
print(my_dog.get_sound())
print(my_dog.del_sound())
print(my_dog.get_sound())

# with decorators
class Dog:
  def __init__(self):
    self._sound = 'woof'

  @property
  def sound(self):
    return self._sound

  @sound.setter
  def sound(self, new_sound):
    self._sound = new_sound

  @sound.deleter
  def sound(self):
    del self._sound
    print('no more sound')

my_dog = Dog()

print(my_dog.sound)
my_dog.sound = 'bark'
print(my_dog.sound)
del my_dog.sound
print(my_dog.sound)

```