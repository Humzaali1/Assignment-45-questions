var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Magician ".concat(i + 1, ": ").concat(magicians[i]));
    }
}
show_magicians(magicians);
/*
Magician 1: Harry Houdini
Magician 2: David Copperfield
Magician 3: Penn Jillette
*/ 
