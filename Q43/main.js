var magician_names = ["Harry Houdini", "Penn Jillette", "Teller"];
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "The Great " + arr[i];
    }
    return arr;
}
var great_magicians = make_great(magician_names.slice());
function show_magicians(arr) {
    arr.forEach(function (magician) {
        console.log(magician);
    });
}
console.log("Original magicians:");
show_magicians(magician_names);
console.log("\nMagicians with 'The Great' added to their names:");
show_magicians(great_magicians);
/**
OutPut;
Original magicians:
Harry Houdini
Penn Jillette
Teller

Magicians with 'The Great' added to their names:
The Great Harry Houdini
The Great Penn Jillette
The Great Teller
*/ 
