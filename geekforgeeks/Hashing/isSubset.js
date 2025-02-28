// Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].


function frequencyCount(arr) {
    let map = new Map();
    for (i=1; i<=arr.length; i++) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 0);
        }
    }
    return map;

}


function isSubset(a, b) {
    let mapA = new Map();
    for (let element of a) {
        if (mapA.has(element)) {
            mapA.set(element, mapA.get(element) + 1);
        } else {
            mapA.set(element, 1);
        }
    }

    // Check if all elements of array b are present in mapA with sufficient frequency
    for (let element of b) {
        if (!mapA.has(element) || mapA.get(element) === 0) {
            return false;
        } else {
            mapA.set(element, mapA.get(element) - 1);
        }
    }
    return true;
}

console.log(isSubset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
console.log(isSubset([1, 2, 3, 4, 5, 6], [1, 2, 8]));
// Time Complexity: O(n)
// Space Complexity: O(n)
