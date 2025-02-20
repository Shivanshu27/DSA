// Declare an object
// let ob = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

const ob = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};
 
// Declare a flatten function that takes
// object as parameter and returns the
// flatten object
const flattenObj = (ob) => {
 
    // The object which contains the
    // final result
    let result = {};
 
    // loop through the object "ob"
    for (const i in ob) {
        console.log(i)
 
        // We check the type of the i using
        // typeof() function and recursively
        // call the function again
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            console.log(temp)
            for (const j in temp) {
 
                // Store temp in result
                result[i + '.' + j] = temp[j];
            }
        }
 
        // Else store ob[i] in result directly
        else {
            result[i] = ob[i];
        }
    }
    return result;
};
 