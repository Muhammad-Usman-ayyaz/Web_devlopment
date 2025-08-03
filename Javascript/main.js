/*let z = "name";
let age = 25;
console.log(typeof z);
console.log(typeof age);
console.log(`I am ${z} and I am ${age} years old.`);*/
//string methods touppercase, lowercase, length,split
const fruits = ["apple", "banana", "cherry"]; // mutlti types allowed in  an single array
//fruits.push("orange"); // add to the end of the array
// let x = true is boolean
/*let min = 1;
let max = 100;
let random = Math.floor(Math.random() * (max - min + 1)) + min; // Include min

let running = true;
while (running) {
  let x = window.prompt(
    "Enter a number between 1 and 100 (or type 'exit' to quit):"
  );

  if (x === null || x.toLowerCase() === "exit") {
    window.prompt("Game exited by user.");
    break;
  }

  x = Number(x);
  if (isNaN(x)) {
    window.prompt("Invalid input. Please enter a number.");
    continue;
  } 

  if (x < min || x > max) {
    window.prompt(`Please enter a number between ${min} and ${max}.`);
  } else if (x === random) {
    window.prompt("🎉 Congratulations! You guessed the number!");
    running = false;
  } else if (x < random) {
    window.prompt("📉 Your guess is too low.");
  } else {
    window.prompt("📈 Your guess is too high.");
  }
} */
/*
// Callback function example ( allows a function to be passed as an argument to another function)
hello(goodbye)
function hello(callback) {
  console.log("Hello, World!");
  callback();
 
}
function goodbye() {
  console.log("Goodbye, World!");
}
*/
/* 
//foreach() example its is used to call a gunction for each element in an array
const numbers = [1, 2, 3, 4, 5];
numbers.foreach(double); // Output: 2, 4, 6, 8, 10

numbers.forEach(function (number) {
  console.log(number * 2); // Output: 2, 4, 6, 8, 10
});


function double(element , index, array) {
  array[index]=element * 2; // Output: 2, 4, 6, 8, 10
}

*/
/* 
//map() example it is used to create a new array by applying a function to each element of the original array

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(double); // Output: [2, 4, 6, 8, 10]
function double(element) {
  return element * 2; // Output: 2, 4, 6, 8, 10
}
console.log(doubled); // Output: [2, 4, 6, 8, 10]
*/
/*
// filter() example it is used to create a new array with all elements that pass the test implemented by the provided function
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven); // Output: [2, 4]
function isEven(element) {
  return element % 2 === 0; // Output: [2, 4]
}
console.log(evenNumbers); // Output: [2, 4]

*/

/*
//reduce() example it is used to execute a reducer function on each element of the array, resulting in a single output value

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(add);// Output: 15
function add(accumulator, currentValue) {
  return accumulator + currentValue; // Output: 15
}
console.log(sum); // Output: 15



*/

/*
//error handling using try catch and finally same as java 
try {
  // Code that may throw an error
  let result = riskyFunction();
  console.log("Result:", result);
  throw new Error("Something went wrong!"); // Simulating an error
}
catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}
finally {
  // Code that will always execute
  console.log("Cleanup or final actions.");
}

*/
/* 
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 is running...");
    callback();
  }, 3000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 is running...");
    callback();
  }, 1500);
}
function task3(callback) {
  console.log("Task 3 is running...");
  callback();
}
function runTasks() {
  task1(() => {
    task2(() => {
      task3(() => {
        console.log("All tasks completed.");
      });
    });
  });
}
runTasks();
*/
/*
// Promises example 
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true; // Simulate no error
      if (!error) {
        reject(new Error("Task 1 failed"));
      } else {
        console.log("Task 1 is running...");
        resolve();
      }
    }, 3000);
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true; // Simulate no error
      if (!error) {
        reject(new Error("Task 2 failed"));
      } else {
        console.log("Task 2 is running...");
        resolve();
      }
    }, 3000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // Simulate no error
      if (!error) {
        reject(new Error("Task 3 failed"));
      } else {
        console.log("Task 3 is running...");
        resolve();
      }
    }, 3000);
  });
}
task1()
  .then(() => {
    console.log("Task 1 completed successfully");
    return task2();
  })
  .then(() => {
    console.log("Task 2 completed successfully");
    return task3();
  })
  .then(() => {
    console.log("Task 3 completed successfully");
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
 */

// async/ await Promises example
/*
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true; // Simulate no error
      if (!error) {
        reject(new Error("Task 1 failed"));
      } else {
        console.log("Task 1 is running...");
        resolve();
        console.log("Task 1 completed.");
      }
    }, 3000);
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true; // Simulate no error
      if (!error) {
        reject(new Error("Task 2 failed"));
      } else {
        console.log("Task 2 is running...");
        resolve();
        console.log("Task 2 completed.");
      }
    }, 3000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // Simulate no error
      if (!error) {
        reject(new Error("Task 3 failed"));
      } else {
        console.log("Task 3 is running...");
        resolve();
        console.log("Task 1 completed.");
      }
    }, 3000);
  });
}
async function runTasks() {
  try {
    const t1result = await task1();
    console.log(t1result);
    const t2result = await task2();
    console.log(t2result);
    const t3result = await task3();
    console.log(t3result);
    console.log("All tasks completed successfully.");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
runTasks();
// End of the code snippet
// Note: The above code will run the tasks sequentially, waiting for each task to complete

*/
/* 
/// JSON example basic local
const name = ["spongebob", "squidward", "sandy", "patrick"];
const person = {
  name: "spongebob",
  age: 20,
  occupation: "fry cook",
};

const people = [
  {
    name: "spongebob",
    age: 20,
    occupation: "fry cook",
  },
  {
    name: "squidward",
    age: 30,
    occupation: "cashier",
  },
  {
    name: "sandy",
    age: 25,
    occupation: "scientist",
  },
  {
    name: "patrick",
    age: 22,
    occupation: "starfish",
  },
];

const personJSON = JSON.stringify(person);
const peopleJSON = JSON.stringify(people);
const namesJSON = JSON.stringify(name);
console.log("Person JSON:", personJSON);
console.log("People JSON:", peopleJSON);
console.log("Names JSON:", namesJSON);
// Parsing JSON back to JavaScript objects
const parsedPerson = JSON.parse(personJSON);
const parsedPeople = JSON.parse(peopleJSON);
const parsedNames = JSON.parse(namesJSON);
console.log("Parsed Person:", parsedPerson);
console.log("Parsed People:", parsedPeople);
//console.log("Parsed Names:", parsedNames);

*/
/*// Importing JSON files
async function fetchData() {
  try {
    const name = document.getElementById("name").value.tolowerCase();
    const image = document.getElementById("image");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    image.src = data.sprites.front_default;
    image.style.display = "block"; // Show the image
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
} */
const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".city");
const card = document.querySelector(".card");
const apikey = "a2810df097d46e5bdab99463e1d3f934";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      const weatherdata = await fetchdata(city);
      displayWeather(weatherdata);
    } catch (error) {
      console.error("An error occurred while fetching the weather data.");
      displayError("An error occurred while fetching the weather data.");
    }
  } else {
    displayError("Please enter a city name.");
  }
});
async function fetchdata(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
function displayWeather(data) {
  const {
    name: { name },
    main: { temp, humidity },
    weather: [{ id, description }],
  } = data;
  card.textContent = ""; // Clear previous contents
  const temperature = Math.round(temp - 273.15); // Convert Kelvin to Celsius
  const citydisplay = document.createElement("h2");
  citydisplay.classList.add("citydisplay");
  citydisplay.textContent = name;
  card.children.add(citydisplay);
  const temperatureElement = document.createElement("p");
  temperatureElement.classList.add("temperature");
  temperatureElement.textContent = `${temperature}°C`;
  card.children.add(temperatureElement);
  const humidityElement = document.createElement("p");
  humidityElement.classList.add("humidityl");
  humidityElement.textContent = `Humidity: ${humidity}%`;
  card.children.add(humidityElement);
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("descriptionl");
  descriptionElement.textContent = description;
  card.children.add(descriptionElement);
  const icon = document.createElement("p");
  icon.classList.add("emoji");
  icon.textContent = getWeatherIcon(id);
  card.children.add(icon);
  card.style.display = "flex"; // Show the card
  card.style.flexDirection = "column"; // Stack elements vertically
}
function getWeatherIcon(id) {
  if (id >= 200 && id < 300) {
    return "⛈️"; // Thunderstorm
  } else if (id >= 300 && id < 500) {
    return "🌦️"; // Drizzle
  } else if (id >= 500 && id < 600) {
    return "🌧️"; // Rain
  } else if (id >= 600 && id < 700) {
    return "❄️"; // Snow
  } else if (id >= 700 && id < 800) {
    return "🌫️"; // Atmosphere
  } else if (id === 800) {
    return "☀️"; // Clear
  } else if (id > 800 && id < 900) {
    return "☁️"; // Clouds
  }
}
function displayError(message) {
  card.textContent = ""; // Clear previous contents
  const errorElement = document.createElement("p");
  errorElement.classList.add("error");
  errorElement.textContent = message;
  card.appendChild(errorElement);
  card.style.display = "flex"; // Show the card
  card.style.flexDirection = "column"; // Stack elements vertically
}
