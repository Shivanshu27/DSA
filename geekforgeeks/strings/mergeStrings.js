function mergeStrings(S1, S2)
{
    //your code here
    let result = "";
    let i = 0;
    let j = 0;
    while (i < S1.length && j < S2.length) {
        result += S1[i] + S2[j];
        i++;
        j++;
    }
    while (i < S1.length) {
        result += S1[i];
        i++;
    }
    while (j < S2.length) {
        result += S2[j];
        j++;
    }
    return result;
}

console.log(mergeStrings("abc", "defgh")); 