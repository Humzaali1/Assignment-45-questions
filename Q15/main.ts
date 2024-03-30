let guests: string[] = ["Albert Einstein", "Donald Trump", "Leonardo da Vinci"];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner.`);
}

console.log(`Unfortunately, ${guests[1]} can't make it to dinner.`);

guests[1] = "Grace Hopper";

console.log("New Guest list:");

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are invited to dinner.`);
}