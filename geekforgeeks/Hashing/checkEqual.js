// Given two arrays a[] and b[] of equal size, the task is to find whether the elements in the arrays are equal.

// Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.

// Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.


function checkEqual(a, b) {
    let a1 = a.sort((a, b) => a - b);
    let b1 = b.sort((a, b) => a - b);
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== b1[i]) {
            return false;
        }
    }
    return true;
}

// time complexity is O(nlogn)
// space complexity is O(1)

// wihtout sorting
function checkEqual(a, b) {
    let map = {};
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = map[a[i]] ? map[a[i]] + 1 : 1;
    }
    for (let i = 0; i < b.length; i++) {
        if (!map[b[i]]) {
            return false;
        }
        map[b[i]]--;
    }
    return true;
}

// time complexity is O(n)
// space complexity is O(n)

console.log(checkEqual([1, 2, 5, 4, 0], [2, 4, 5, 0, 1])); // true
console.log(checkEqual([1, 2, 5], [2, 4, 15])); // false

