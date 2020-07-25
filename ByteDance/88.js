/**
 * 88
 * self
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b)
    console.log(nums1)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
/**
 * 原地修改
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
merge = function (nums1, m, nums2, n) {
    nums1.splice(m)
    nums1.push(...nums2.splice(0, n))
    nums1.sort((a, b) => a - b)
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
