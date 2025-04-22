const printseries = (start, diff, stop) => {
    const buildAscending = (current, diff, stop) => {
        if (current > stop) return [];
        return [current].concat(buildAscending(current + diff, diff, stop));
    };

    const buildDescending = (arr, index) => {
        if (index < 0) return [];
        return [arr[index]].concat(buildDescending(arr, index - 1));
    };

    const ascending = buildAscending(start, diff, stop);
    const descending = buildDescending(ascending, ascending.length - 2); // exclude the peak
    return ascending.concat(descending);
};

// Example test
console.log(printseries(1, 2, 9)); // [1, 3, 5, 7, 9, 7, 5, 3, 1]
console.log(printseries(2, 2, 10)); // [2, 4, 6, 8, 10, 8, 6, 4, 2]
