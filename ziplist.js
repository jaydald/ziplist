// Function using a for loop to zip two lists
function zipList(list1, list2) {
    var result = [];
    for (var i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
// Function using array functional methods to zip two lists
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce(function (acc, item, index) {
        acc.push(item);
        acc.push(list2[index]);
        return acc;
    }, []);
}
// Example usage
var list1 = ['a', 'b', 'c'];
var list2 = [1, 2, 3];
// Output using both methods
console.log('Using loop:', zipList(list1, list2)); // Expected output: ['a', 1, 'b', 2, 'c', 3]
console.log('Using functional method:', zipListTheFunctionalWay(list1, list2)); // Expected output: ['a', 1, 'b', 2, 'c', 3]
