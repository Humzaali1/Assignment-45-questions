var guests = ["Albert Einstein", "Donald Trump", "Leonardo da Vinci"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", you are invited to dinner."));
}
console.log("Unfortunately, ".concat(guests[1], " can't make it to dinner."));
guests[1] = "Grace Hopper";
console.log("New Guest list:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", you are invited to dinner."));
}
