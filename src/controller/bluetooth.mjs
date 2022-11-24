import { BluetoothSerialPort } from "bluetooth-serial-port";
const btSerial = new BluetoothSerialPort();

//As soon as a device is found, its name and address is shown.
//btSerial.on("found", function (address, name) {
//	console.log("The name is: " + name + "\nThe address is: " + address);
//});

//Scan for bluetooth devices.
//btSerial.inquire();

export { btSerial };
