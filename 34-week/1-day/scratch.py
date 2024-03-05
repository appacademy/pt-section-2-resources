names = ["JAMES", "julie", "Ana", "Ria"]
# sorted_names = sorted(names)
# print(sorted_names)

# ensure a case-insensitive sort with the `.lower` string method
# and sort in reverse order
# sorted_names = sorted(names, key=lambda x: x.lower(), reverse=True)
# print(sorted_names)
# print(names)

# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# only_as = filter(lambda num: num >= 90, scores)
# print(only_as)        # <filter object at 0x10546ad30>
# print(list(only_as))  # [90, 91, 99, 90]
# print(dir(only_as))
# print(next(only_as))
# print(next(only_as))
# print(next(only_as))
# print(next(only_as))
# print(next(only_as))

# def get_grade(num):
#     if (num >= 90):
#         return "A"
#     elif (num <90 and num >= 80):
#         return "B"
#     elif (num < 80 and num >= 70):
#         return "C"
#     elif (num < 70 and num >= 60):
#         return "D"
#     else:
#         return "F"
# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# print(map(get_grade, scores))  # <map object at 0x106faffa0>
# grades = list(map(get_grade, scores))
# print(grades)

# scores = [90, 86, 75, 91, 62, 99, 88, 90, 100, 0, 20]
# grades = ["A", "B", "C", "A", "D", "A", "B", "Z"]
# combined = zip(scores, grades)
# combined_list = list(combined)
# combined_dict = dict(combined_list)
# print(combined)       # <zip object at 0x1023a9600>
# print(combined_list)  # [(90, 'A'), (86, 'B'), (75, 'C'), (91, 'A'), (62, 'D'), (99, 'A'), (88, 'B'), (90, 'A')]
# print(combined_dict)  # {90: 'A', 86: 'B', 75: 'C', 91: 'A', 62: 'D', 99: 'A', 88: 'B'}

# nums = [-5, 11, 10, 14]
# mapped_nums = map(lambda num: num * 2 + 1, nums)

# print(list(mapped_nums))  # [-9, 23, 21, 29]
# print([num * 2 + 1 for num in nums])

# nums = [-5, 11, 10, 14]

# filtered_nums = filter(lambda num: num > 0, nums)

# print(list(filtered_nums))  # [11, 10, 14]
# print([num for num in nums if num > 0])

# items = ['a', 'b', 'c']

# enumerated_items = enumerate(items)
# print(enumerated_items)

# enumerated_list = list(enumerated_items)
# print(enumerated_list)

# for i, element in enumerated_list:
#     print(i, element)

set1 = {1, 2, 3}
print(set1.add(1))
print(set1.add(4))