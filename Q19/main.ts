let guests: string[] = ["John", "Peter", "Jimmy", "Jack", "Tom"];

console.log(`You are inviting ${guests.length} people for dinner:`);

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}`);
}

console.log("Sorry, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm sorry I can't invite you for dinner.`);
}

console.log(`Dear ${guests[0]}, you are still invited for dinner.`);
console.log(`Dear ${guests[1]}, you are still invited for dinner.`);

guests = [];
console.log("Final Guest List: ", guests);