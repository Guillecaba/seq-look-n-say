const f = (n) => {
    //base case
  let result = "1";
  if (n == 1) return result;


  for (let i = 1; i < n; i++) {
    let tempString = "";
    let c = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        c++; // counter of the same kind of number sequentialy
      } else {
        tempString += c + result[j];
        c = 1;
      }
    }
    result = tempString;
  }

  return result;
};

console.log(f(1));
console.log(f(2));
console.log(f(5));

// The time complexity of this implementation is high, only acceptable for small "n", is a lot more than O(n^2), something exponential
