from findSmaller import find_smallest


def selection_sort(arr: list):
    sorted_arr = []
    for i in range(len(arr)):
        smallest_index = find_smallest(arr)
        smallest_item = arr.pop(smallest_index)
        sorted_arr.append(smallest_item)
    return sorted_arr


print(selection_sort([13, 3, 2, 4]))
