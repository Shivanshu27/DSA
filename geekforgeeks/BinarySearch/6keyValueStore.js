// Time Based Key-Value Store
// Implement a time-based key-value data structure that supports:

// Storing multiple values for the same key at specified time stamps
// Retrieving the key's value at a specified timestamp
// Implement the TimeMap class:

// TimeMap() Initializes the object.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
// Note: For all calls to set, the timestamps are in strictly increasing order.

// Example 1:

// Input:
// ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

// Output:
// [null, null, "happy", "happy", null, "sad"]

// Explanation:
// TimeMap timeMap = new TimeMap();
// timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
// timeMap.get("alice", 1);           // return "happy"
// timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
// timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
// timeMap.get("alice", 3);           // return "sad"


class TimeMap {
    constructor() {
        this.map = new Map(); // Initialize a map to store key-value pairs
    }

    set(key, value, timestamp) {
        // If the key doesn't exist in the map, create a new entry
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        // Push the value and timestamp as an array into the map
        this.map.get(key).push([value, timestamp]);
    }

    get(key, timestamp) {
        // If the key doesn't exist in the map, return an empty string
        if (!this.map.has(key)) {
            return "";
        }
        const values = this.map.get(key); // Get the array of values for the key
        let left = 0;
        let right = values.length - 1;

        // Perform binary search to find the most recent value before or equal to the given timestamp
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][1] <= timestamp) {
                left = mid + 1; // Move to the right half
            } else {
                right = mid - 1; // Move to the left half
            }
        }

        // If right is -1, it means no valid timestamp was found
        return right === -1 ? "" : values[right][0]; // Return the value at the found index or an empty string
    }
}