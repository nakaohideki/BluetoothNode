import express from "express"; //importing the necessaries packages
import * as httpServer from "http"; //importing the necessaries packages
import socket from "socket.io"; //importing the necessaries packages
import * as url from "url"; //importing all with alias url from the url necessaries package
import { detectedDevices } from "./simulation/simulation.mjs";
import { btSerial } from "./src/controller/bluetooth.mjs";
import { log } from "./src/controller/controller.mjs";
const app = express(); //instanciating the previous imported package with empty constructor.
const http = httpServer.createServer(app); //instanciating the previous imported package building a new server using app as constructor parameter.
const io = socket(http); //instanciating the previous imported package with the http created server as constructor of socket.io instance.
const __dirname = url.fileURLToPath(new URL(".", import.meta.url)); //delegating the current directory path to __dirname statement.

app.get("/", (req, res) => {
	//Sendinng connection to index.html file.
	res.sendFile(__dirname + "src/view/index.html");
});

io.on("connection", (socket) => {
	socket.on("DetectedDevices", () => {
		socket.emit("DetectedDevices", detectedDevices);
		for (var i = 0; i < detectedDevices.length; i++) {
			log(
				"trace",
				detectedDevices[i].code,
				"Detected at " + detectedDevices[i].address
			);
		}
		socket.on("PumpConnection", (msg) => {
			console.log(msg);
			log("trace", msg[0], "(" + msg[1] + ")" + " conectou-se com a " + msg[2]);
		});
	});
});

io.on("connection", (socket) => {
	socket.on("DetectedDevices", () => {
		socket.emit("DetectedDevices", detectedDevices);
	});
});

btSerial.inquire();

http.listen(3000, function () {
	//listening the port 3000.
	console.log("Listening on port 3000");
});

app.use(express.static("."));
