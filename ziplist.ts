// Function using a for loop to zip two lists
function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
  }
  return result;
}

// Function using array functional methods to zip two lists
function zipListTheFunctionalWay(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  return list1.reduce((acc: (string | number)[], item: string | number, index: number) => {
      acc.push(item);
      acc.push(list2[index]);
      return acc;
  }, []);
}

// Example usage
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

// Output using both methods
console.log('Using loop:', zipList(list1, list2)); // Expected output: ['a', 1, 'b', 2, 'c', 3]
console.log('Using functional method:', zipListTheFunctionalWay(list1, list2)); // Expected output: ['a', 1, 'b', 2, 'c', 3]
