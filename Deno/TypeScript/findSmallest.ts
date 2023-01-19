export default function findSmallest(list: any[]) {
  let smallestItem = list[0];
  let smallestItemIndex = 0;

  list.forEach((item, index) => {
    if (item < smallestItem) {
      smallestItem = item;
      smallestItemIndex = index;
    }
  });
  return smallestItemIndex;
}
