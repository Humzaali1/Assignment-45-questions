function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    if (size !== "small" && size !== "medium" && size !== "large") {
        console.log("Invalid size.");
        return;
    }
    console.log("The ".concat(size, " shirt has the message: ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("x-large", "I love Angular!");
/* Output
The large shirt has the message: I love TypeScript
The medium shirt has the message: I love TypeScript
The x-large shirt has the message: I love Angular!
*/ 
