let magician_names: string[] = ["Harry Houdini", "Penn Jillette", "Teller"];

function make_great(arr: string[]): string[] {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = "The Great " + arr[i];
  }
  return arr;
}

let great_magicians: string[] = make_great(magician_names.slice());

function show_magicians(arr: string[]): void {
  arr.forEach((magician) => {
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