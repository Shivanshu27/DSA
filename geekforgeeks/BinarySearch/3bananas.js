// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.

// Example 1:

// Input: piles = [1,4,3,2], h = 9

// Output: 2

function minEatingSpeed(piles, h) {
    // Function to check if a given speed k can finish eating all bananas in h hours
    const canFinish = (k) => {
        let hours = 0; // Initialize hours taken to 0
        for (let pile of piles) {
            // Calculate the number of hours needed for the current pile
            hours += Math.ceil(pile / k);
        }
        return hours <= h; // Return true if total hours is less than or equal to h
    };

    let left = 1; // Minimum speed (at least 1 banana per hour)
    let right = Math.max(...piles); // Maximum speed (the largest pile)

    while (left < right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle speed
        if (canFinish(mid)) {
            right = mid; // If we can finish with mid speed, try lower speeds
        } else {
            left = mid + 1; // If not, increase the speed
        }
    }

    return left; // The minimum speed that allows finishing in h hours
}
// Example usage:   
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30