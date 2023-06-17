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
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect('mongodb+srv://garage:garage@garage.vd5xcl0.mongodb.net/garage?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  isAllowed: { type: Boolean, default: true }, // Add the isAllowed field with a default value of true
});


const User = mongoose.model('User', userSchema);

const app = express();
const port = 8080;

let buttonClicked = false;
let directButton = false;
let sensorData = null;
let randomNumber = null;
let loraotp = null;
// const staticPath = path.join(__dirname, "../public");

app.use(bodyParser.json());
// app.use(express.static(staticPath));

// Serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../espserver/public/admin.html'));
});


app.get("/data", (req, res) => {
  res.json(sensorData);
});

// User management route (admin only)
app.get('/admin/users', (req, res) => {
  // Check if user is an admin (you can implement your own logic here)
  const isAdmin = true; // Placeholder value, replace with your admin check logic

  if (isAdmin) {
    // Query all users from the database
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
      });
  } else {
    res.status(403).json({ error: 'Unauthorized access.' });
  }
});


app.patch('/admin/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { isAllowed } = req.body;

  User.findByIdAndUpdate(userId, { isAllowed }, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        res.status(404).json({ error: 'User not found.' });
      } else {
        res.json(updatedUser);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating the user.' });
    });
});


// User deletion route (admin only)
app.delete('/admin/users/:userId', (req, res) => {
  // Check if user is an admin (you can implement your own logic here)
  const isAdmin = true; // Placeholder value, replace with your admin check logic

  if (isAdmin) {
    const userId = req.params.userId;

    User.findByIdAndRemove(userId)
      .then(deletedUser => {
        if (deletedUser) {
          res.json({ message: 'User deleted successfully.' });
        } else {
          res.status(404).json({ error: 'User not found.' });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
      });
  } else {
    res.status(403).json({ error: 'Unauthorized access.' });
  }
});



app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  User.findOne({ username, email, password })
    .then(existingUser => {
      if (existingUser) {
        res.status(409).json({ error: 'User already exists.' });
      } else {
        const newUser = new User({ username, email, password, isAllowed: true }); // Set isAllowed to true
        newUser.save()
          .then(savedUser => {
            res.json(savedUser);
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred during signup.' });
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred during signup.' });
    });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }) // Only search for the username
    .then(user => {
      if (!user) {
        res.status(401).json({ error: 'Invalid username or password.' });
      } else if (!user.isAllowed) { // Check if user is allowed to login
        res.status(403).json({ error: 'Access denied. Please contact the administrator.' });
      } else if (user.password !== password) { // Compare the password
        res.status(401).json({ error: 'Invalid username or password.' });
      } else {
        // Include the isAdmin flag in the response
        res.json({ isAdmin: user.isAdmin });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred during login.' });
    });
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

app.post('/loraotp', (req, res) => {
  const { otp } = req.body;
  console.log('Received OTP:', otp);
  loraotp = otp;
  res.json({ message: 'OTP received successfully' });
});

app.get('/api/loradata', (req, res) => {
  const otpdata = {
    otp: loraotp,
  };

  const jsonData = JSON.stringify(otpdata);

  res.setHeader("Content-Type", "application/json");
  res.send(jsonData);

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
