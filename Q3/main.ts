{// Store the person's name in a variable 
let Name: string = "Eric";
}
// Print the name in lowercase
console.log(name.toLowerCase()); // Output: eric

// Print the name in uppercase
console.log(name.toUpperCase()); // Output: ERIC

// Print the name in titlecase
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(toTitleCase(name)); // Output: Eric

