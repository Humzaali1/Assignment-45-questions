function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    if (size !== "small" && size !== "medium" && size !== "large") {
        console.log("Invalid size.");
        return;
    }
    console.log(`The ${size} shirt has the message: ${message}`);
}

make_shirt();
make_shirt("medium");
make_shirt("x-large", "I love Angular!");

/* Output
The large shirt has the message: I love TypeScript
The medium shirt has the message: I love TypeScript
The x-large shirt has the message: I love Angular!
*/