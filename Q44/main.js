function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Ordering a sandwich with following items: " + items.join(', '));
}
makeSandwich('beef', 'cheese', 'mayo');
makeSandwich('turkey', 'avocado');
makeSandwich('peanut butter');
//*Ordering a sandwich with following items: ham, cheese, mayo
//Ordering a sandwich with following items
