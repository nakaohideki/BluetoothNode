import { device } from "./device.mjs";
export class gasNozzle extends device {
	constructor(type, counter, address, linkedToPump) {
		super(type, counter, address);
		this.code = " " + type + " " + counter; //the addition of type and counter atributes makes the code atribute.
		this.linkedToPump = linkedToPump;
		this.address = String(address);
	}

	//Statement of the method to connect the gazNozzle to the fuel pump.
	connectToPump(fuelPump, gasNozzle) {
		if (fuelPump.gasNozzleConnectedList.length < 4) {
			//In case of the fuel pump that is trying connection has more than 4 gas nozzle, the connection will not be concluded.
			fuelPump.gasNozzleConnectedList.push(gasNozzle.code);
			gasNozzle.linkedToPump = fuelPump.code;
		}
	}
}
