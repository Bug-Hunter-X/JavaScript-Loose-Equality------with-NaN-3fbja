function foo(a) {
  if (a === null) {
    return 0; 
  } else if (a === undefined) {
    return 1; 
  } else if (Number.isNaN(a)){
    return 2; // Handle NaN explicitly
  } else {
    return a; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(NaN)); // Output: 2