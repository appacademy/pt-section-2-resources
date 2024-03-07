# import scratch

# boo = scratch.Dog("Boo", "Dalmation", owner="Will")
# boo.bark()
from nested.scratch import Dog

# peach = Dog("Peach", "Pomeranian")
# peach.bark()

class SupaDog(Dog):

    def __init__(self, name, breed, owner="Greg", weight=100):
        super().__init__(name, breed, owner)
        self.weight = weight

    def roll_over(self):
        print(f"{self.name} doesn't roll over for you or for anybody")

    def __repr__(self):
        return f"This is a SuperDog, {self.name}, who is a {self.breed}, that is owned by {self._owner}"

scooby = SupaDog("Scooby", "Great Dane", owner="Shaggy", weight=140)
print(scooby.name)
print(scooby.breed)
print(scooby._owner)
print(scooby.owner)
scooby.bark()
scooby.roll_over()
print(scooby)
print(dir(scooby))