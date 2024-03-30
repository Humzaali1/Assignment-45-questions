var guests = ["John", "Peter", "Jimmy", "Jack", "Tom"];
console.log("You are inviting ".concat(guests.length, " people for dinner:"));
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i]));
}
console.log("Sorry, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Dear ".concat(removedGuest, ", I'm sorry I can't invite you for dinner."));
}
console.log("Dear ".concat(guests[0], " and ").concat(guests[1], ", you are still invited for dinner."));
guests = [];
console.log("Final Guest List: ", guests);
