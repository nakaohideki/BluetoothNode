//device is a generic class that overalls gas nozzle and fuel pump.
import { device } from "./device.mjs";
export class fuelPump extends device {
	constructor(type, counter, address) {
		super(type, counter, address);
		this.code = type + " " + counter; //the addition of type and counter atributes makes the code atribute.
		this.address = address;
	}
	gasNozzleConnectedList = [];
}

export function print(fuelPump) {
	console.log(
		"Code: " +
			fuelPump.code +
			"\nAddress: " +
			fuelPump.address +
			"\nConnected gas nozzles:" +
			fuelPump.gasNozzleConnectedList +
			"\n"
	);
}
