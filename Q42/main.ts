let magicians: string[] = ['David Copperfield', 'Doug Henning', 'Harry Houdini', 'Penn Jillette', 'Teller'];

function make_great(magician_list: string[]) {
    for (let i = 0; i < magician_list.length; i++) {
        magician_list[i] = 'The Great ' + magician_list[i];
    }
}

function show_magicians(magician_list: string[]) {
    for (let i = 0; i < magician_list.length; i++) {
        console.log(magician_list[i]);
    }
}

console.log('Original list:');
show_magicians(magicians);

console.log('\nList after make_great():');
make_great(magicians);
show_magicians(magicians);
/**
OutPut;
Original list:
David Copperfield
Doug Henning
Harry Houdini
Penn Jillette
Teller

List after make_great():
The Great David Copperfield
The Great Doug Henning
The Great Harry Houdini
The Great Penn Jillette
The Great Teller
*/