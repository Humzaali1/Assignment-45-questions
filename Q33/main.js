var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
        console.log(numbers[i] + "st");
    }
    else if (numbers[i] === 2) {
        console.log(numbers[i] + "nd");
    }
    else if (numbers[i] === 3) {
        console.log(numbers[i] + "rd");
    }
    else {
        console.log(numbers[i] + "th");
    }
}
//Output
//1st
//2nd
//3rd
//4th
//5th
//6th
//7th
//8th
//9th