// Car Fleet
// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

// Example 1:

// Input: target = 10, position = [1,4], speed = [3,2]

// Output: 1
// Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.Car Fleet
// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

// Example 1:

// Input: target = 10, position = [1,4], speed = [3,2]

// Output: 1
// Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.


function carFleet(target, position, speed) {
    const n = position.length;
    const cars = [];
    
    // Create an array of cars with their position and time to reach the target
    for (let i = 0; i < n; i++) {
        const time = (target - position[i]) / speed[i];
        cars.push([position[i], time]);
    }
    
    // Sort cars by their position in descending order
    cars.sort((a, b) => b[0] - a[0]);
    
    let fleets = 0;
    let maxTime = 0;
    
    // Iterate through the sorted cars
    for (const [pos, time] of cars) {
        // If the current car's time is greater than the maxTime, it forms a new fleet
        if (time > maxTime) {
            fleets++;
            maxTime = time; // Update maxTime to the current car's time
        }
    }
    
    return fleets; // Return the number of fleets
}
// Example usage:   
console.log(carFleet(10, [1, 4], [3, 2])); // Output: 1
// Explanation:
// The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.




class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (let [p, s] of pair) {
            stack.push((target - p) / s);
            if (stack.length >= 2 &&
                 stack[stack.length - 1] <= stack[stack.length - 2]) 
            {
                stack.pop();
            }
        }
        return stack.length;
    }
}