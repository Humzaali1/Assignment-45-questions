interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary key-value pairs
  }
  
  function carInfo(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    // Merge additional arguments into the car object
    args.forEach(arg => {
      const [key, value] = Object.entries(arg)[0];
      car[key] = value;
    });
  
    return car;
  }
  
  // Calling the function with required information and additional details
  const carDetails = carInfo("Toyota", "Camry", { color: "blue" }, { year: 2023 });
  
  // Printing the object to ensure all information was stored correctly
  console.log(carDetails);
  