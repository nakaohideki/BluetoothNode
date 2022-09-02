btSerial = new (require("bluetooth-serial-port").BluetoothSerialPort)(); //Declaring the modules that is going to be used in this project.
var deviceName = ""; //Declaring the variable to store the name of the bluetooth detected device.

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(1711, function () {
  console.log("Listening on port 1711");
});

btSerial.inquire(); // Detecting Bluetooth devices nearby.

console.log("Searching for new Bluetooth devices nearby"); //Printing at the console the message of the system status.

btSerial.on("found", function (adress, name) {
  switch (name) {
    case "?? ?? - S20+":
      deviceName = "Estação central";
      break;

    case "Samsung Galaxy S7 edge":
      deviceName = "Bico";
      break;

    default:
      break;
  }
  console.log(deviceName); //Printing at the console the name of the Bluetooth device found.
}); //Assigning the name of Bluetooth device found in the variable declared at the beginning.

btSerial.on("finished", function () {
  console.log("Searching for new Bluetooth devices nearby");
  setTimeout(function () {
    btSerial.inquire();
  }, 100);
}); //Searching for new Bluetooth devices nearby every 100 milisecons.

// Configuring the data manipulation and system graphic interface
