let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];

function show_magicians(magicians: string[]): void {
    for (let i: number = 0; i < magicians.length; i++) {
        console.log(`Magician ${i+1}: ${magicians[i]}`);
    }
}

show_magicians(magicians);
/*
Magician 1: Harry Houdini
Magician 2: David Copperfield
Magician 3: Penn Jillette
*/