function carInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Merge additional arguments into the car object
    args.forEach(function (arg) {
        var _a = Object.entries(arg)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Calling the function with required information and additional details
var carDetails = carInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// Printing the object to ensure all information was stored correctly
console.log(carDetails);
