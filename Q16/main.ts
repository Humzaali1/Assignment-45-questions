let guests: string[] = ["Albert Einstein", "Grace Hopper", "Leonardo da Vinci"];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner.`);
}

console.log("Great news, I found a bigger dinner table!");

guests.unshift(" Marie Curie");
guests.splice(2, 0, " Thomas Edison");
guests.push("Steve Jobs");

console.log("New Guest list:");

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner.`);
}