import findSmallest from "./findSmallest.ts";

export default function selectionSort(list: any[]) {
  const newList: any[] = [];
  let smallestIndex = 0;
  let smallestItem: any;
  const listLength = list.length;
  for (let index = 0; index < listLength; index++) {
    smallestIndex = findSmallest(list);
    smallestItem = list[smallestIndex];
    list.splice(smallestIndex, 1);
    newList.push(smallestItem);
  }
  return newList;
}

console.log(selectionSort([5, 3, 2, 10]));
