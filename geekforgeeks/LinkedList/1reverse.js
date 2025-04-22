// A linked list is a linear data structure where elements, called nodes, are connected using pointers. Each node contains two parts:

// Data: The value or information stored in the node.
// Pointer (or Next): A reference to the next node in the sequence.
// Types of Linked Lists:
// Singly Linked List: Each node points to the next node, and the last node points to null.
// Doubly Linked List: Each node has two pointers, one pointing to the next node and another pointing to the previous node.
// Circular Linked List: The last node points back to the first node, forming a circular structure.


// When to Use Linked Lists:

// Dynamic Size: When the size of the data structure is unknown or changes frequently, as linked lists can grow or shrink dynamically.
// Efficient Insertions/Deletions: When frequent insertions or deletions are required, especially at the beginning or middle of the list, as these operations are faster compared to arrays.
// Memory Utilization: When memory allocation is fragmented, as linked lists do not require contiguous memory like arrays.


// Advantages:

// Dynamic memory allocation.
// Efficient insertion and deletion operations.


// Disadvantages:

// Higher memory usage due to pointers.
// Sequential access (no random access like arrays).
// More complex implementation compared to arrays.


// Common Use Cases:

// Implementing stacks, queues, and graphs.
// Undo functionality in applications.
// Dynamic memory management.
// To begin working with linked lists, you can start by implementing a singly linked list as it is the simplest form.

// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []


function reverseList(head) {
    let prev = null; // Initialize previous node as null (end of reversed list)
    let curr = head; // Start with the head of the original list

    while (curr) {
        const nextTemp = curr.next; // Store the next node to avoid losing reference
        curr.next = prev; // Reverse the link: point current node to the previous node
        prev = curr; // Move prev to the current node
        curr = nextTemp; // Move to the next node in the original list
    }

    return prev; // New head of the reversed list (previously the last node)
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
const reversedHead = reverseList(head);
console.log(reversedHead); // Output: { value: 3, next: { value: 2, next: { value: 1, next: { value: 0, next: null } } } }
// Output: { value: 3, next: { value: 2, next: { value: 1, next: { value: 0, next: null } } } }


