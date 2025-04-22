// Linked List Cycle Detection
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.

function hasCycle(head) {
    if (!head) return false; // If the list is empty, no cycle exists

    let slow = head; // Slow pointer
    let fast = head; // Fast pointer

    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle detected
}

// Example usage:
const head = {
    value: 0,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null
            }
        }
    }
};
const cycleHead = head.next.next; // Create a cycle
head.next.next.next = cycleHead; // Point the last node to the second node
console.log(hasCycle(head)); // Output: true (cycle exists)

// Example usage without cycle:
const head2 = {
    value: 0,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null
            }
        }
    }
};
console.log(hasCycle(head2)); // Output: false (no cycle exists)
// The above code defines a function hasCycle that detects if a linked list has a cycle using the Floyd's Tortoise and Hare algorithm. It uses two pointers (slow and fast) to traverse the list at different speeds. If they meet, a cycle exists; otherwise, it returns false.
// The example usage demonstrates how to create a linked list with and without a cycle and test the function.



function hasCycle(head) {
    let seen = new Set();
    let cur = head;
    while (cur) {
        if (seen.has(cur)) {
            return true;
        }
        seen.add(cur);
        cur = cur.next;
    }
    return false;
}