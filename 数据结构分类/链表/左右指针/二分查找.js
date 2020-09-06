function findNum(arr, num) {
    let left = 0, right = arr.length - 1, mid = 0
    while (left < right) {
        mid = (left + right) >> 1
        if (arr[mid] > num) {
            right = mid - 1
        } else if (arr[mid] < num) {
            left = mid + 1
        } else {
            //返回mid
            return mid
        }
    }
    return -1
}

let test_arr = [1, 2, 3, 4, 5]

console.log(findNum(test_arr, 4))