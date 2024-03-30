var guests = ["Albert Einstein", "Grace Hopper", "Leonardo da Vinci"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", you are invited to dinner."));
}
console.log("Great news, I found a bigger dinner table!");
guests.unshift(" Marie Curie");
guests.splice(2, 0, " Thomas Edison");
guests.push("Steve Jobs");
console.log("New Guest list:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", you are invited to dinner."));
}
