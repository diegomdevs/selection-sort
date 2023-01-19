def find_smallest(arr: list) -> int:
    smallest_item = arr[0]
    smallest_index = 0

    for i in range(len(arr)):
        ITEM = arr[i]
        if (ITEM < smallest_item):
            smallest_item = ITEM
            smallest_index = i

    return smallest_index
