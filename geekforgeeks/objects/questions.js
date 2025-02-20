function calculateAverageAge(students) {
    if (students.length === 0) {
        return 0; // Handle the case of an empty array
    }

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

const studentData = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 },
    // ... add more student objects
];

const averageAge = calculateAverageAge(studentData);
console.log(`The average age of students is: ${averageAge}`);




function findMostProlificAuthor(books) {
    // Create an empty object to store author frequencies
    const authorFrequencies = {};

    // Iterate through the books array and count authors' books
    for (const book of books) {
        const author = book.author;
        if (author in authorFrequencies) {
            authorFrequencies[author]++;
        } else {
            authorFrequencies[author] = 1;
        }
    }

    let mostProlificAuthor = null;
    let maxBooks = 0;

    // Iterate through the author frequencies to find the most prolific author
    for (const author in authorFrequencies) {
        if (authorFrequencies[author] > maxBooks) {
            mostProlificAuthor = author;
            maxBooks = authorFrequencies[author];
        }
    }

    return mostProlificAuthor;
}

// Example array of books
const books = [
    { title: "Book 1", author: "Author A" },
    { title: "Book 2", author: "Author B" },
    { title: "Book 3", author: "Author A" },
    { title: "Book 4", author: "Author C" },
    { title: "Book 5", author: "Author A" },
    { title: "Book 6", author: "Author B" },
    { title: "Book 7", author: "Author A" }
];

const mostProlificAuthor = findMostProlificAuthor(books);
console.log("Most prolific author:", mostProlificAuthor);





function findSubordinates(orgStructure, employeeName) {
    if (!orgStructure.hasOwnProperty("name")) {
        return []; // Invalid organizational structure
    }

    if (orgStructure.name === employeeName) {
        return getSubordinateNames(orgStructure);
    }

    for (const subordinate of orgStructure.subordinates || []) {
        const subordinates = findSubordinates(subordinate, employeeName);
        if (subordinates.length > 0) {
            return subordinates;
        }
    }

    return [];
}

function getSubordinateNames(employee) {
    const subordinateNames = [];

    if (employee.subordinates) {
        for (const subordinate of employee.subordinates) {
            subordinateNames.push(subordinate.name);
            subordinateNames.push(...getSubordinateNames(subordinate));
        }
    }

    return subordinateNames;
}

const companyStructure = {
    name: "Alice",
    subordinates: [
        {
            name: "Bob",
            subordinates: [
                {
                    name: "Charlie",
                    subordinates: [
                        { name: "man" }
                    ]
                },
                { name: "David" }
            ]
        },
        {
            name: "Eve",
            subordinates: [
                { name: "Frank" }
            ]
        }
    ]
};

const employeeName = "Bob";
const subordinates = findSubordinates(companyStructure, employeeName);
console.log(`Subordinates of ${employeeName}:`, subordinates);





function calculateTotalPrice(products) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price * product.quantity;
    }

    return totalPrice;
}

// Example array of products
const products = [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 20, quantity: 3 },
    { name: "Product C", price: 5, quantity: 5 }
];

const total = calculateTotalPrice(products);
console.log("Total price:", total);


function groupByProperty (arr,property){
    const grouped = {};

    for (const obj of arr){
        const propValue = obj[property];
        if (!grouped[propValue]){
            grouped[propValue] = [];
        }
        grouped[propValue].push(obj);
    }
    return grouped;
}




// Example array of people with names and ages
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];

const groupedByAge = groupByProperty(people, "age");
console.log(groupedByAge);






function findCityWithHighestPopulation(cities) {
    let highestPopulationCity = null;
    let highestPopulation = 0;

    for (const city of cities) {
        if (city.population > highestPopulation) {
            highestPopulation = city.population;
            highestPopulationCity = city;
        }
    }

    return highestPopulationCity;
}

// Example array of city objects with names and populations
const cities = [
    { name: "New York", population: 8537673 },
    { name: "Los Angeles", population: 3977683 },
    { name: "Chicago", population: 2716000 },
    { name: "Houston", population: 2320268 }
];

const cityWithHighestPopulation = findCityWithHighestPopulation(cities);
console.log(cityWithHighestPopulation);
