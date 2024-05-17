// Create a function named sortBuckets that receives 1 input:
// buckets: an array of strings
// The function will sort the buckets array based on the length of each string in ascending order. If two strings have the same length, maintain their original order.
// The function should return the sorted buckets array.


function sortBuckets(buckets) {
  return buckets.sort((a, b) => a.length - b.length);
}