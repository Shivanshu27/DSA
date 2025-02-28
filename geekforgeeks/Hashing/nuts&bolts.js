// Given a set of n nuts & bolts. There is a one-on-one mapping between nuts and bolts. You have to Match nuts and bolts efficiently. Comparison of a nut to another nut or a bolt to another bolt is not allowed. It means the nut can only be compared with the bolt and the bolt can only be compared with the nut to see which one is bigger/smaller.
// The elements should follow the following order: { !,#,$,%,&,*,?,@,^ }

function matchNutsAndBolts(nuts, bolts) {
    const order = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
    const orderMap = new Map();

    // Create a mapping for order positions
    order.forEach((char, index) => {
        orderMap.set(char, index);
    });

    // Sort nuts and bolts based on the predefined order
    nuts.sort((a, b) => orderMap.get(a) - orderMap.get(b));
    bolts.sort((a, b) => orderMap.get(a) - orderMap.get(b));
}

// Example usage
let nuts = ['@', '%', '$', '#', '^'];
let bolts = ['%', '@', '#', '$', '^'];

matchNutsAndBolts(nuts, bolts);

console.log(nuts.join(' ')); // Output: # $ % @ ^
console.log(bolts.join(' ')); // Output: # $ % @ ^


// We define the predefined order using an array.
// A Map (orderMap) is created to store the priority index for each character.
// The sort() function is applied to both nuts and bolts, using the predefined order for comparison.
// Since sorting is based on a hash map lookup (orderMap.get(a) - orderMap.get(b)), it ensures O(n log n) complexity.