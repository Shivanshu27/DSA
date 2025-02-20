function ReverseSort(str)
{
    //your code here
    // return str.split("").sort().reverse().join("");
    // without in built functions
    let arr = str.split("");
    let n = arr.length;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(arr[j] < arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr.join("");
}

console.log(ReverseSort("geeks")); // "skgee"