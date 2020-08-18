let arr = [1, 3, 3, 3, 3, 4, 5]

function GetNumberOfK(data, k) {
    // write code here
    return data.lastIndexOf(k) - data.indexOf(k) + 1
}

console.log(GetNumberOfK(arr, 2))
