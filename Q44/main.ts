function makeSandwich(...items: string[] ): void {
    console.log(`Ordering a sandwich with following items: ` + items.join(', '));
  }
  
  makeSandwich('beef', 'cheese', 'mayo');
  makeSandwich('turkey', 'avocado');
  makeSandwich('peanut butter');
  

//*Ordering a sandwich with following items: ham, cheese, mayo
//Ordering a sandwich with following items
