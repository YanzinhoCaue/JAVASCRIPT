const car = {
  "brand": "BMW",
  "wheels": 4,
  "doors": 2,
  "type": "Sedan"
};

let jsonForString = JSON.stringify(car);

console.log(jsonForString);

let stringForJson = JSON.parse(jsonForString);

console.log(stringForJson);