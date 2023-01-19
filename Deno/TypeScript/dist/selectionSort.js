"use strict";
exports.__esModule = true;
var findSmallest_ts_1 = require("./findSmallest.ts");
function selectionSort(list) {
    var newList = [];
    var smallestIndex = 0;
    var smallestItem;
    var listLength = list.length;
    for (var index = 0; index < listLength; index++) {
        smallestIndex = findSmallest_ts_1["default"](list);
        smallestItem = list[smallestIndex];
        list.splice(smallestIndex, 1);
        newList.push(smallestItem);
    }
    return newList;
}
exports["default"] = selectionSort;
console.log(selectionSort([5, 3, 2, 10]));
