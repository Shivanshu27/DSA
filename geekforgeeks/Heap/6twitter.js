// Implement a simplified version of Twitter which allows users to post tweets, follow/unfollow each other, and view the 10 most recent tweets within their own news feed.

// Users and tweets are uniquely identified by their IDs (integers).

// Implement the following methods:

// Twitter() Initializes the twitter object.
// void postTweet(int userId, int tweetId) Publish a new tweet with ID tweetId by the user userId. You may assume that each tweetId is unique.
// List<Integer> getNewsFeed(int userId) Fetches at most the 10 most recent tweet IDs in the user's news feed. Each item must be posted by users who the user is following or by the user themself. Tweets IDs should be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId follows the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId unfollows the user with ID followeeId.
// Example 1:

// Input:
// ["Twitter", "postTweet", [1, 10], "postTweet", [2, 20], "getNewsFeed", [1], "getNewsFeed", [2], "follow", [1, 2], "getNewsFeed", [1], "getNewsFeed", [2], "unfollow", [1, 2], "getNewsFeed", [1]]

// Output:
// [null, null, null, [10], [20], null, [20, 10], [20], null, [10]]

// Explanation:
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
// twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
// twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
// twitter.getNewsFeed(2);   // User 2's news feed should only contain their own tweets -> [20].
// twitter.follow(1, 2);     // User 1 follows user 2.
// twitter.getNewsFeed(1);   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
// twitter.getNewsFeed(2);   // User 2's news feed should still only contain their own tweets -> [20].
// twitter.unfollow(1, 2);   // User 1 follows user 2.
// twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].


class Twitter {
    constructor() {
        this.tweets = []; // Stores all tweets as { userId, tweetId, timestamp }
        this.following = new Map(); // Maps userId to a Set of followeeIds
        this.timestamp = 0; // Global timestamp to maintain tweet order
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.push({ userId, tweetId, timestamp: this.timestamp++ });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const followees = this.following.get(userId) || new Set();
        followees.add(userId); // Include the user's own tweets
        const recentTweets = this.tweets
            .filter(tweet => followees.has(tweet.userId))
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 10)
            .map(tweet => tweet.tweetId);
        return recentTweets;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}

// Example usage
const twitter = new Twitter();
twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should only contain their own tweets -> [10].
console.log(twitter.getNewsFeed(2));   // User 2's news feed should only contain their own tweets -> [20].
twitter.follow(1, 2);     // User 1 follows user 2.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
console.log(twitter.getNewsFeed(2));   // User 2's news feed should still only contain their own tweets -> [20].
twitter.unfollow(1, 2);   // User 1 unfollows user 2.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should only contain their own tweets -> [10].






/**
 * const { PriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Twitter {
    constructor() {
        this.count = 0; 
        this.tweetMap = new Map(); // userId -> array of [count, tweetId]
        this.followMap = new Map(); // userId -> set of followeeIds
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count -= 1;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const res = [];
        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }
        this.followMap.get(userId).add(userId);
        const minHeap = new PriorityQueue(
            (a, b) => a[0] - b[0]
        );

        for (const followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                const tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1;
                const [count, tweetId] = tweets[index];
                minHeap.enqueue([count, tweetId, followeeId, index - 1]);
            }
        }

        while (!minHeap.isEmpty() && res.length < 10) {
            const [count, tweetId, followeeId, nextIndex] = minHeap.dequeue();
            res.push(tweetId);
            if (nextIndex >= 0) {
                const [olderCount, olderTweetId] = this.tweetMap.get(followeeId)[nextIndex];
                minHeap.enqueue([olderCount, olderTweetId, followeeId, nextIndex - 1]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}