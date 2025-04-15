// Design a stack class that supports the push, pop, top, and getMin operations.

// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
// This means the last element added to the stack is the first one to be removed. 
// Think of a stack as a pile of plates: you add plates to the top of the pile, 
// and you remove plates from the top of the pile as well.

// Common operations on a stack include:
// 1. Push: Add an element to the top of the stack.
// 2. Pop: Remove the top element from the stack.
// 3. Top/Peek: Retrieve the top element without removing it.
// 4. GetMin: Retrieve the minimum element in the stack.

// Pros of using a stack:
// - Simple and easy to implement.
// - Useful for solving problems like reversing strings, evaluating expressions, and backtracking.
// - Provides constant time complexity (O(1)) for push, pop, and peek operations.

// Cons of using a stack:
// - Limited access: You can only access the top element.
// - Fixed size if implemented using arrays (unless dynamic resizing is used).
// - Not suitable for random access to elements.

// How stacks are created:
// Stacks can be implemented using arrays or linked lists. 
// - Array-based implementation: Uses a dynamic array to store elements.
// - Linked list-based implementation: Uses nodes where each node points to the next node in the stack.

// Below is an optimized implementation of MinStack using two stacks.

class MinStack {
    constructor() {
        this.stack = []; // Primary stack to store all elements
        this.minStack = []; // Secondary stack to store minimum elements
    }

    /**
     * Pushes the element val onto the stack.
     * @param {number} val 
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // Push to minStack if it's empty or the new value is <= current minimum
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * Removes the element on the top of the stack.
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;
        const removed = this.stack.pop();
        // If the popped element is the current minimum, pop it from minStack as well
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * Gets the top element of the stack.
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    /**
     * Retrieves the minimum element in the stack.
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
// const minStack = new MinStack();
// minStack.push(5);
// minStack.push(3);
// minStack.push(7);
// console.log(minStack.getMin()); // Output: 3
// minStack.pop();
// console.log(minStack.getMin()); // Output: 3
// minStack.pop();
// console.log(minStack.getMin()); // Output: 5

// Brute Force Solution for MinStack:
// In this approach, we use a single stack to store elements. 
// To retrieve the minimum element, we iterate through the stack each time getMin() is called.
// This results in O(n) time complexity for getMin().

class MinStackBruteForce {
    constructor() {
        this.stack = []; // Primary stack to store all elements
    }

    /**
     * Pushes the element val onto the stack.
     * @param {number} val 
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * Removes the element on the top of the stack.
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;
        this.stack.pop();
    }

    /**
     * Gets the top element of the stack.
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    /**
     * Retrieves the minimum element in the stack.
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) return null;
        return Math.min(...this.stack); // O(n) operation
    }
}

// Example usage of brute force solution:
// const minStackBF = new MinStackBruteForce();
// minStackBF.push(5);
// minStackBF.push(3);
// minStackBF.push(7);
// console.log(minStackBF.getMin()); // Output: 3
// minStackBF.pop();
// console.log(minStackBF.getMin()); // Output: 3
// minStackBF.pop();
// console.log(minStackBF.getMin()); // Output: 5