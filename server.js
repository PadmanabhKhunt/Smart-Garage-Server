// // const express = require("express");
// // const bodyParser = require("body-parser");

// // const app = express();
// // app.use(bodyParser.json());

// // let sensorData = null;

// // // Route to serve the web page
// // app.get("/", (req, res) => {
// //   res.send(`
// //     <html>
// //       <head>
// //         <title>Sensor Data</title>
// //         <script>
// //           // Function to update the sensor data
// //           function updateData() {
// //             fetch("/data")
// //               .then(response => response.json())
// //               .then(data => {
// //                 const sensorDataElement = document.getElementById("sensorData");
// //                 sensorDataElement.textContent = JSON.stringify(data);
// //               })
// //               .catch(error => console.error(error));
// //           }

// //           // Call the updateData function initially
// //           updateData();

// //           // Schedule the updateData function to be called every 5 seconds
// //           setInterval(updateData, 5000);
// //         </script>
// //       </head>
// //       <body>
// //         <h1>Sensor Data:</h1>
// //         <p id="sensorData">${
// //           sensorData ? JSON.stringify(sensorData) : "No data available"
// //         }</p>
// //       </body>
// //     </html>
// //   `);
// // });

// // app.get("/data", (req, res) => {
// //   res.json(sensorData);
// // });

// // app.post("/data", (req, res) => {
// //   const { sensor, value } = req.body;
// //   console.log("Received data:", { sensor, value });

// //   if (value === "padmanabh") {
// //     const randomNumber = generateRandomNumber();
// //     sensorData = { sensor: "randomNumber", value: randomNumber };
// //     console.log("Generated random number:", randomNumber);
// //   }

// //   res.send("Data received");
// // });

// // function generateRandomNumber() {
// //   const minNumber = 100000; // Minimum 6-digit number
// //   const maxNumber = 999999; // Maximum 6-digit number
// //   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// // }

// // const serverPort = 3000;

// // app.listen(serverPort, () => {
// //   console.log(`Node.js server is running on port ${serverPort}`);
// // });

// // const express = require("express");
// // const bodyParser = require("body-parser");

// // const app = express();
// // app.use(bodyParser.json());

// // let sensorData = null;

// // // Route to serve the web page
// // app.get("/", (req, res) => {
// //   res.send(`
// //     <html>
// //       <head>
// //         <title>Sensor Data</title>
// //         <script>
// //           // Function to update the sensor data
// //           function updateData() {
// //             fetch("/data")
// //               .then(response => response.json())
// //               .then(data => {
// //                 const sensorDataElement = document.getElementById("sensorData");
// //                 sensorDataElement.textContent = JSON.stringify(data);
// //               })
// //               .catch(error => console.error(error));
// //           }

// //           // Function to send the generated random number to the server
// //           function sendRandomNumber() {
// //             fetch("/number", {
// //               method: "POST"
// //             })
// //               .then(response => response.text())
// //               .then(data => console.log(data))
// //               .catch(error => console.error(error));
// //           }

// //           // Call the updateData function initially
// //           updateData();

// //           // Schedule the updateData function to be called every 5 seconds
// //           setInterval(updateData, 5000);
// //         </script>
// //       </head>
// //       <body>
// //         <h1>Sensor Data:</h1>
// //         <p id="sensorData">${
// //           sensorData ? JSON.stringify(sensorData) : "No data available"
// //         }</p>
// //         <button onclick="sendRandomNumber()">Send Random Number</button>
// //       </body>
// //     </html>
// //   `);
// // });

// // app.get("/data", (req, res) => {
// //   res.json(sensorData);
// // });

// // app.post("/data", (req, res) => {
// //   const { sensor, value } = req.body;
// //   console.log("Received data:", { sensor, value });

// //   let randomNumber = null;

// //   if (value === "padmanabh") {
// //     randomNumber = generateRandomNumber();
// //     sensorData = { sensor: "randomNumber", value: randomNumber };
// //     console.log("Generated random number:", randomNumber);
// //   }

// //   const responseData = {
// //     message: "Data receiveddddd",
// //     randomNumber: randomNumber,
// //   };

// //   res.json(responseData);
// // });

// // app.post("/number", (req, res) => {
// //   if (sensorData && sensorData.sensor === "randomNumber") {
// //     const randomNumber = sensorData.value;

// //     // Implement the code to send data to the ESP32 here
// //     // Replace this with your actual implementation
// //     console.log("Sending data to ESP32:", randomNumber);
// //     // Example code to send data using Serial communication
// //     // Serial.write(randomNumber.toString());

// //     res.json({
// //       randomNumber: randomNumber,
// //       message: "Random number sent to ESP32",
// //     });
// //   } else {
// //     res.send("No random number available");
// //   }
// // });

// // function generateRandomNumber() {
// //   const minNumber = 100000; // Minimum 6-digit number
// //   const maxNumber = 999999; // Maximum 6-digit number
// //   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// // }

// // const serverPort = 3000;

// // app.listen(serverPort, () => {
// //   console.log(`Node.js server is running on port ${serverPort}`);
// // });

// // const express = require("express");
// // const app = express();
// // const port = 3000;

// // let buttonClicked = false;

// // app.get("/api/data", (req, res) => {
// //   if (buttonClicked) {
// //     // Generate some data to send back to the ESP32
// //     const data = {
// //       temperature: 25,
// //       humidity: 60,
// //       pressure: 1013,
// //     };

// //     // Convert the data to a JSON string
// //     const jsonData = JSON.stringify(data);

// //     res.setHeader("Content-Type", "application/json");
// //     res.send(jsonData);
// //   } else {
// //     res.status(403).send("Button not clicked");
// //   }
// // });

// // app.get("/api/button-click", (req, res) => {
// //   buttonClicked = true;
// //   res.send("Button clicked");
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const app = express();
// // const port = 3000;

// // let buttonClicked = false;
// // let sensorData = null;

// // app.use(bodyParser.json());

// // app.get("/", (req, res) => {
// //   const html = `
// //     <!DOCTYPE html>
// //     <html>
// //     <head>
// //       <title>Button Click Example</title>
// //     </head>
// //     <body>
// //       <button onmousedown="startSending()" onmouseup="stopSending()">Click Me</button>
// //       <h1>Sensor Data:</h1>
// //         <p id="sensorData">${
// //           sensorData ? JSON.stringify(sensorData) : "No data available"
// //         }</p>

// //       <script>

// //         function updateData() {
// //             fetch("/data")
// //               .then(response => response.json())
// //               .then(data => {
// //                 const sensorDataElement = document.getElementById("sensorData");
// //                 sensorDataElement.textContent = JSON.stringify(data);
// //               })
// //               .catch(error => console.error(error));
// //           }

// //         let sendingInterval;

// //         function startSending() {
// //           fetch("/api/button-click")
// //             .then(response => response.text())
// //             .then(data => {
// //               console.log(data);
// //               fetchData();
// //             })
// //             .catch(error => console.log(error));

// //           sendingInterval = setInterval(fetchData, 1000); // Send data every second
// //         }

// //         function stopSending() {
// //           clearInterval(sendingInterval);
// //           fetch("/api/button-release")
// //             .then(response => response.text())
// //             .then(data => {
// //               console.log(data);
// //             })
// //             .catch(error => console.log(error));
// //         }

// //         function fetchData() {
// //           fetch("/api/data")
// //             .then(response => response.json())
// //             .then(data => {
// //               console.log(data);
// //               // Handle the received data
// //               // Update the webpage with the data
// //             })
// //             .catch(error => console.log(error));
// //         }

// //           // Call the updateData function initially
// //           updateData();

// //           // Schedule the updateData function to be called every 5 seconds
// //           setInterval(updateData, 5000);
// //       </script>
// //     </body>
// //     </html>
// //   `;

// //   res.send(html);
// // });

// // app.get("/data", (req, res) => {
// //   res.json(sensorData);
// // });

// // let randomNumber = null;

// // app.post("/data", (req, res) => {
// //   const { sensor, value } = req.body;
// //   console.log("Received data:", { sensor, value });

// //   if (value === "padmanabh") {
// //     randomNumber = generateRandomNumber();
// //     sensorData = { sensor: "randomNumber", value: randomNumber };
// //     console.log("Generated random number:", randomNumber);
// //   }

// //   const responseData = {
// //     message: "Data receiveddddd",
// //     randomNumber: randomNumber,
// //   };

// //   res.json(responseData);
// // });

// // app.get("/api/data", (req, res) => {
// //   if (buttonClicked) {
// //     const data = {
// //       randomNumber: randomNumber, // Store the random number in the data object
// //     };

// //     const jsonData = JSON.stringify(data);

// //     res.setHeader("Content-Type", "application/json");
// //     res.send(jsonData);
// //   } else {
// //     res.status(403).send("Button not clicked");
// //   }
// // });

// // app.get("/api/button-click", (req, res) => {
// //   buttonClicked = true;
// //   res.send("Button clicked");
// // });

// // app.get("/api/button-release", (req, res) => {
// //   buttonClicked = false;
// //   res.send("Button released");
// // });
// // function generateRandomNumber() {
// //   const minNumber = 100000; // Minimum 6-digit number
// //   const maxNumber = 999999; // Maximum 6-digit number
// //   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// // }

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// let buttonClicked = false;

// let sensorData = null;

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   const html = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Button Click Example</title>
//     </head>
//     <body>
//       <button onmousedown="startSending()" onmouseup="stopSending()">Click Me</button>
//       <h1>Sensor Data:</h1>
//       <p id="sensorData">${
//         sensorData ? JSON.stringify(sensorData) : "No data available"
//       }</p>

//       <script>
//         function updateData() {
//           fetch("/data")
//             .then(response => response.json())
//             .then(data => {
//               const sensorDataElement = document.getElementById("sensorData");
//               sensorDataElement.textContent = JSON.stringify(data);
//             })
//             .catch(error => console.error(error));
//         }

//         function startSending() {
//           fetch("/api/button-click")
//             .then(response => response.text())
//             .then(data => {
//               console.log(data);
//             })
//             .catch(error => console.log(error));
//         }

//         function stopSending() {
//           fetch("/api/button-release")
//             .then(response => response.text())
//             .then(data => {
//               console.log(data);
//             })
//             .catch(error => console.log(error));
//         }

//         // Call the updateData function initially
//         updateData();

//         // Schedule the updateData function to be called every 5 seconds
//         setInterval(updateData, 5000);
//       </script>
//     </body>
//     </html>
//   `;

//   res.send(html);
// });

// app.get("/data", (req, res) => {
//   res.json(sensorData);
// });

// let randomNumber = null;

// app.post("/data", (req, res) => {
//   const { sensor, value } = req.body;
//   console.log("Received data:", { sensor, value });

//   if (value === "padmanabh") {
//     randomNumber = generateRandomNumber();
//     sensorData = { sensor: "randomNumber", value: randomNumber };
//     console.log("Generated random number:", randomNumber);
//   }

//   const responseData = {
//     message: "Data received",
//   };

//   res.json(responseData);
// });

// app.get("/api/data", (req, res) => {
//   if (buttonClicked) {
//     const data = {
//       randomNumber: randomNumber, // Store the random number in the data objectkjhg
//     };

//     const jsonData = JSON.stringify(data);

//     res.setHeader("Content-Type", "application/json");
//     res.send(jsonData);
//   } else {
//     res.status(403).send("Button not clicked");
//   }
// });

// app.get("/api/button-click", (req, res) => {
//   buttonClicked = true;

//   res.send("Button clicked");
// });

// app.get("/api/button-release", (req, res) => {
//   buttonClicked = false;

//   res.send("Button released");
// });

// function generateRandomNumber() {
//   const minNumber = 100000; // Minimum 6-digit number
//   const maxNumber = 999999; // Maximum 6-digit number
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// let sensorData = null;

// // Route to serve the web page
// app.get("/", (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <title>Sensor Data</title>
//         <script>
//           // Function to update the sensor data
//           function updateData() {
//             fetch("/data")
//               .then(response => response.json())
//               .then(data => {
//                 const sensorDataElement = document.getElementById("sensorData");
//                 sensorDataElement.textContent = JSON.stringify(data);
//               })
//               .catch(error => console.error(error));
//           }

//           // Call the updateData function initially
//           updateData();

//           // Schedule the updateData function to be called every 5 seconds
//           setInterval(updateData, 5000);
//         </script>
//       </head>
//       <body>
//         <h1>Sensor Data:</h1>
//         <p id="sensorData">${
//           sensorData ? JSON.stringify(sensorData) : "No data available"
//         }</p>
//       </body>
//     </html>
//   `);
// });

// app.get("/data", (req, res) => {
//   res.json(sensorData);
// });

// app.post("/data", (req, res) => {
//   const { sensor, value } = req.body;
//   console.log("Received data:", { sensor, value });

//   if (value === "padmanabh") {
//     const randomNumber = generateRandomNumber();
//     sensorData = { sensor: "randomNumber", value: randomNumber };
//     console.log("Generated random number:", randomNumber);
//   }

//   res.send("Data received");
// });

// function generateRandomNumber() {
//   const minNumber = 100000; // Minimum 6-digit number
//   const maxNumber = 999999; // Maximum 6-digit number
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// const serverPort = 3000;

// app.listen(serverPort, () => {
//   console.log(`Node.js server is running on port ${serverPort}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// let sensorData = null;

// // Route to serve the web page
// app.get("/", (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <title>Sensor Data</title>
//         <script>
//           // Function to update the sensor data
//           function updateData() {
//             fetch("/data")
//               .then(response => response.json())
//               .then(data => {
//                 const sensorDataElement = document.getElementById("sensorData");
//                 sensorDataElement.textContent = JSON.stringify(data);
//               })
//               .catch(error => console.error(error));
//           }

//           // Function to send the generated random number to the server
//           function sendRandomNumber() {
//             fetch("/number", {
//               method: "POST"
//             })
//               .then(response => response.text())
//               .then(data => console.log(data))
//               .catch(error => console.error(error));
//           }

//           // Call the updateData function initially
//           updateData();

//           // Schedule the updateData function to be called every 5 seconds
//           setInterval(updateData, 5000);
//         </script>
//       </head>
//       <body>
//         <h1>Sensor Data:</h1>
//         <p id="sensorData">${
//           sensorData ? JSON.stringify(sensorData) : "No data available"
//         }</p>
//         <button onclick="sendRandomNumber()">Send Random Number</button>
//       </body>
//     </html>
//   `);
// });

// app.get("/data", (req, res) => {
//   res.json(sensorData);
// });

// app.post("/data", (req, res) => {
//   const { sensor, value } = req.body;
//   console.log("Received data:", { sensor, value });

//   let randomNumber = null;

//   if (value === "padmanabh") {
//     randomNumber = generateRandomNumber();
//     sensorData = { sensor: "randomNumber", value: randomNumber };
//     console.log("Generated random number:", randomNumber);
//   }

//   const responseData = {
//     message: "Data receiveddddd",
//     randomNumber: randomNumber,
//   };

//   res.json(responseData);
// });

// app.post("/number", (req, res) => {
//   if (sensorData && sensorData.sensor === "randomNumber") {
//     const randomNumber = sensorData.value;

//     // Implement the code to send data to the ESP32 here
//     // Replace this with your actual implementation
//     console.log("Sending data to ESP32:", randomNumber);
//     // Example code to send data using Serial communication
//     // Serial.write(randomNumber.toString());

//     res.json({
//       randomNumber: randomNumber,
//       message: "Random number sent to ESP32",
//     });
//   } else {
//     res.send("No random number available");
//   }
// });

// function generateRandomNumber() {
//   const minNumber = 100000; // Minimum 6-digit number
//   const maxNumber = 999999; // Maximum 6-digit number
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// const serverPort = 3000;

// app.listen(serverPort, () => {
//   console.log(`Node.js server is running on port ${serverPort}`);
// });

// const express = require("express");
// const app = express();
// const port = 3000;

// let buttonClicked = false;

// app.get("/api/data", (req, res) => {
//   if (buttonClicked) {
//     // Generate some data to send back to the ESP32
//     const data = {
//       temperature: 25,
//       humidity: 60,
//       pressure: 1013,
//     };

//     // Convert the data to a JSON string
//     const jsonData = JSON.stringify(data);

//     res.setHeader("Content-Type", "application/json");
//     res.send(jsonData);
//   } else {
//     res.status(403).send("Button not clicked");
//   }
// });

// app.get("/api/button-click", (req, res) => {
//   buttonClicked = true;
//   res.send("Button clicked");
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// let buttonClicked = false;
// let sensorData = null;

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   const html = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Button Click Example</title>
//     </head>
//     <body>
//       <button onmousedown="startSending()" onmouseup="stopSending()">Click Me</button>
//       <h1>Sensor Data:</h1>
//         <p id="sensorData">${
//           sensorData ? JSON.stringify(sensorData) : "No data available"
//         }</p>

//       <script>

//         function updateData() {
//             fetch("/data")
//               .then(response => response.json())
//               .then(data => {
//                 const sensorDataElement = document.getElementById("sensorData");
//                 sensorDataElement.textContent = JSON.stringify(data);
//               })
//               .catch(error => console.error(error));
//           }

//         let sendingInterval;

//         function startSending() {
//           fetch("/api/button-click")
//             .then(response => response.text())
//             .then(data => {
//               console.log(data);
//               fetchData();
//             })
//             .catch(error => console.log(error));

//           sendingInterval = setInterval(fetchData, 1000); // Send data every second
//         }

//         function stopSending() {
//           clearInterval(sendingInterval);
//           fetch("/api/button-release")
//             .then(response => response.text())
//             .then(data => {
//               console.log(data);
//             })
//             .catch(error => console.log(error));
//         }

//         function fetchData() {
//           fetch("/api/data")
//             .then(response => response.json())
//             .then(data => {
//               console.log(data);
//               // Handle the received data
//               // Update the webpage with the data
//             })
//             .catch(error => console.log(error));
//         }

//           // Call the updateData function initially
//           updateData();

//           // Schedule the updateData function to be called every 5 seconds
//           setInterval(updateData, 5000);
//       </script>
//     </body>
//     </html>
//   `;

//   res.send(html);
// });

// app.get("/data", (req, res) => {
//   res.json(sensorData);
// });

// let randomNumber = null;

// app.post("/data", (req, res) => {
//   const { sensor, value } = req.body;
//   console.log("Received data:", { sensor, value });

//   if (value === "padmanabh") {
//     randomNumber = generateRandomNumber();
//     sensorData = { sensor: "randomNumber", value: randomNumber };
//     console.log("Generated random number:", randomNumber);
//   }

//   const responseData = {
//     message: "Data receiveddddd",
//     randomNumber: randomNumber,
//   };

//   res.json(responseData);
// });

// app.get("/api/data", (req, res) => {
//   if (buttonClicked) {
//     const data = {
//       randomNumber: randomNumber, // Store the random number in the data object
//     };

//     const jsonData = JSON.stringify(data);

//     res.setHeader("Content-Type", "application/json");
//     res.send(jsonData);
//   } else {
//     res.status(403).send("Button not clicked");
//   }
// });

// app.get("/api/button-click", (req, res) => {
//   buttonClicked = true;
//   res.send("Button clicked");
// });

// app.get("/api/button-release", (req, res) => {
//   buttonClicked = false;
//   res.send("Button released");
// });
// function generateRandomNumber() {
//   const minNumber = 100000; // Minimum 6-digit number
//   const maxNumber = 999999; // Maximum 6-digit number
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// let buttonClicked = false;
// let sensorData = null;

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   const html = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Button Click Example</title>
//     </head>
//     <body>
//       <button onmousedown="startSending()" onmouseup="stopSending()">Click Me</button>
//       <h1>Sensor Data:</h1>
//         <p id="sensorData">${
//           sensorData ? JSON.stringify(sensorData) : "No data available"
//         }</p>

//       <script>

//         function updateData() {
//             fetch("/data")
//               .then(response => response.json())
//               .then(data => {
//                 const sensorDataElement = document.getElementById("sensorData");
//                 sensorDataElement.textContent = JSON.stringify(data);
//               })
//               .catch(error => console.error(error));
//           }

//         let sendingInterval;

//         function startSending() {
//           buttonClicked = true;
//           sendingInterval = setInterval(fetchData, 1000); // Send data every second
//         }

//         function fetchData() {
//           fetch("/api/data")
//             .then(response => response.json())
//             .then(data => {
//               console.log(data);
//               // Handle the received data
//               // Update the webpage with the data
//             })
//             .catch(error => console.log(error));
//         }

//           // Call the updateData function initially
//           updateData();

//           // Schedule the updateData function to be called every 5 seconds
//           setInterval(updateData, 5000);
//       </script>
//     </body>
//     </html>
//   `;

//   res.send(html);
// });

// app.get("/data", (req, res) => {
//   res.json(sensorData);
// });

// let randomNumber = null;

// app.post("/data", (req, res) => {
//   const { sensor, value } = req.body;
//   console.log("Received data:", { sensor, value });

//   if (value === "padmanabh") {
//     randomNumber = generateRandomNumber();
//     sensorData = { sensor: "randomNumber", value: randomNumber };
//     console.log("Generated random number:", randomNumber);
//   }

//   const responseData = {
//     message: "Data receiveddddd",
//     randomNumber: randomNumber,
//   };

//   res.json(responseData);
// });

// app.get("/api/data", (req, res) => {
//   if (buttonClicked) {
//     const data = {
//       randomNumber: randomNumber, // Store the random number in the data object
//     };

//     const jsonData = JSON.stringify(data);

//     res.setHeader("Content-Type", "application/json");
//     res.send(jsonData);
//   } else {
//     res.status(403).send("Button not clicked");
//   }
// });

// app.get("/api/button-click", (req, res) => {
//   buttonClicked = true;
//   res.send("Button clicked");
// });

// app.get("/api/button-release", (req, res) => {
//   buttonClicked = false;
//   res.send("Button released");
// });
// function generateRandomNumber() {
//   const minNumber = 100000; // Minimum 6-digit number
//   const maxNumber = 999999; // Maximum 6-digit number
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });




const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let buttonClicked = false;
let directButton = false;
let sensorData = null;
let randomNumber = null;
const staticPath = path.join(__dirname, "../public");

app.use(bodyParser.json());
app.use(express.static(staticPath));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json(sensorData);
});

app.post("/data", (req, res) => {
  const { sensor, value } = req.body;
  console.log("Received data:", { sensor, value });

  if (value === "padmanabh") {
    randomNumber = generateRandomNumber();
    sensorData = { value: randomNumber };
    console.log("Generated random number:", randomNumber);
  }

  const responseData = {
    message: "Data received",
  };

  res.json(responseData);
});

app.get("/api/data", (req, res) => {
  if (buttonClicked) {
    const data = {
      randomNumber: randomNumber,
    };

    const jsonData = JSON.stringify(data);

    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  }
});

app.get("/api/onoff", (req, res) => {
  if (directButton==false) {
    const dataoff = {
      message: 0,
    };

    const jsonData = JSON.stringify(dataoff);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  }
  else if (directButton == true){
    const dataon = {
      message: 1,
    };

    const jsonData = JSON.stringify(dataon);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  }
});

app.get("/api/button-click", (req, res) => {
  buttonClicked = !buttonClicked;
  res.send("Button clicked");
});

app.get("/api/directButtonON", (req, res) => {
  directButton = true;
  res.send("ON");
});
app.get("/api/directButtonOFF", (req, res) => {
  directButton = false;
  res.send("OFF");
});



function generateRandomNumber() {
  const minNumber = 100000; // Minimum 6-digit number
  const maxNumber = 999999; // Maximum 6-digit number
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
