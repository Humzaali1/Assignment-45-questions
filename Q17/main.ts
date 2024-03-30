let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Grace Hopper", "Thomas Edison", "Steve Jobs"];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner.`);
}

console.log("I'm sorry to inform you that, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm sorry I can't invite you for dinner.`);
}

console.log(`Dear ${guests[0]}, you are still invited for dinner.`);
console.log(`Dear ${guests[1]}, you are still invited for dinner.`);

guests = [];
console.log("Final Guest List: ", guests);