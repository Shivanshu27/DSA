function findParentName(tree, childName) {
    if (tree.name === childName) {
        return null; // The root of the tree has no parent
    }
    
    for (const child of tree.childs) {
        if (child.name === childName) {
            return tree.name;
        } else {
            const parentName = findParentName(child, childName);
            if (parentName) {
                return parentName;
            }
        }
    }
    
    return null;
}

const childName = "child5";
const parentName = findParentName(orgTree, childName);
if (parentName) {
    console.log(`The parent of ${childName} is ${parentName}`);
} else {
    console.log(`${childName} was not found in the tree.`);
}







// function findParentNames(tree, childName) {
//     const parentNames = [];
    
//     function findParents(node, targetName, currentParents) {
//         if (node.name === targetName) {
//             parentNames.push(...currentParents);
//             return;
//         }
        
//         for (const child of node.childs) {
//             findParents(child, targetName, [...currentParents, node.name]);
//         }
//     }
    
//     findParents(tree, childName, []);

//     return parentNames;
// }

// const function findParentName(tree, childName) {
//     if (tree.name === childName) {
//         return null; // The root of the tree has no parent
//     }
    
//     for (const child of tree.childs) {
//         if (child.name === childName) {
//             return tree.name;
//         } else {
//             const parentName = findParentName(child, childName);
//             if (parentName) {
//                 return parentName;
//             }
//         }
//     }
    
//     return null;
// }

// const childName = "child5";
// const parentName = findParentName(orgTree, childName);
// if (parentName) {
//     console.log(`The parent of ${childName} is ${parentName}`);
// } else {
//     console.log(`${childName} was not found in the tree.`);
// }







// function findParentNames(tree, childName) {
//     const parentNames = [];
    
//     function findParents(node, targetName, currentParents) {
//         if (node.name === targetName) {
//             parentNames.push(...currentParents);
//             return;
//         }
        
//         for (const child of node.childs) {
//             findParents(child, targetName, [...currentParents, node.name]);
//         }
//     }
    
//     findParents(tree, childName, []);

//     return parentNames;
// }

// const childName = "child5";
// const parentNames = findParentNames(orgTree, childName);

// if (parentNames.length > 0) {
//     console.log(`The parents of ${childName} are: ${parentNames.join(', ')}`);
// } else {
//     console.log(`${childName} was not found in the tree.`);
// }



// interface TreeNode {
//     name: string;
//     childs: TreeNode[];
// }

// function findParentName(tree: TreeNode, childName: string): string | null {
//     if (tree.name === childName) {
//         return null; // The root of the tree has no parent
//     }

//     for (const child of tree.childs) {
//         if (child.name === childName) {
//             return tree.name;
//         } else {
//             const parentName = findParentName(child, childName);
//             if (parentName) {
//                 return parentName;
//             }
//         }
//     }

//     return null;
// }

// const orgTree: TreeNode = {
//     name: "root",
//     childs: [
//         {
//             name: "parent1",
//             childs: [
//                 {
//                     name: "child1",
//                     childs: []
//                 },
//                 {
//                     name: "child2",
//                     childs: []
//                 }
//             ]
//         },
//         {
//             name: "parent2",
//             childs: [
//                 {
//                     name: "child3",
//                     childs: []
//                 },
//                 {
//                     name: "child4",
//                     childs: []
//                 }
//             ]
//         },
//         {
//             name: "parent3",
//             childs: [
//                 {
//                     name: "child5",
//                     childs: []
//                 }
//             ]
//         }
//     ]
// };

// const childName = "child5";
// const parentName = findParentName(orgTree, childName);
// if (parentName) {
//     console.log(`The parent of ${childName} is ${parentName}`);
// } else {
//     console.log(`${childName} was not found in the tree.`);
// }
