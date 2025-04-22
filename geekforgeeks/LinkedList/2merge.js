// Merge Two Sorted Linked Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// Example 1:



// Input: list1 = [1,2,4], list2 = [1,3,5]

// Output: [1,1,2,3,4,5]


function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify the merging process
    const dummy = { next: null };
    let current = dummy; // Pointer to build the new list

    // Traverse both lists until one of them is exhausted
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1; // Link the smaller node to the merged list
            list1 = list1.next; // Move to the next node in list1
        } else {
            current.next = list2; // Link the smaller node to the merged list
            list2 = list2.next; // Move to the next node in list2
        }
        current = current.next; // Move to the next position in the merged list
    }

    // If there are remaining nodes in either list, link them to the merged list
    current.next = list1 || list2;

    return dummy.next; // Return the head of the merged sorted linked list
}
// Example usage:   
const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
const list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: null
        }
    }
};
const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList); // Output: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } } }
// Output: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } } }