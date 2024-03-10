def add_2(n):
    def inner(n2):
        return n + n2
    return inner

def inner(n, n2):
    return n + n2



add_3 = add_2(3)
print(add_3(1))
print(add_3(4))
print(add_3(10))
print(add_3(100))
print(add_3(1000))

add_10 = add_2(10)
print(add_10(1))
print(add_10(4))
print(add_10(10))
print(add_10(100))
print(add_10(1000))


