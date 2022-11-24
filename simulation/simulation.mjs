import { btSerial } from "../src/controller/bluetooth.mjs";
import { fuelPump } from "../src/models/fuel-pump.mjs";
import { gasNozzle } from "../src/models/gas-nozzle.mjs";
let detectedDevices = []; //List with detected fuel pump for simulation
//let detectedGasNozzle = []; //List with detected fuel pump for simulation

btSerial.on("found", function (address, name) {
	console.log("The name is: " + name + "\nThe address is: " + address);
});

btSerial.inquire();

var fp = 10; //Quantity of fuel pump for simulation.
var gn = 8; //Quantity of gas nozzle for simulation.

for (
	var i = 0;
	i < fp;
	i++ //Generation of fuel pump objects for simulation
) {
	detectedDevices.push(new fuelPump("Bomba", i + 1, "AA:BB:CC:DD:" + i));
}

for (
	var j = 0;
	j < gn;
	j++ //Generation of gas nozzle objects for simulation
) {
	detectedDevices.push(new gasNozzle("Bico", j + 1, "AA:BB:CC:DD:" + j));
}

export { detectedDevices };
