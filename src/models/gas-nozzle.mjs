import { device } from "./device.mjs";

export class gasNozzle extends device {
	constructor(type, counter, address, connectedFuelPump) {
		super(type, counter, address);
	}

	fuelPumpConnected = "";

	connectToFuelPump(fuelPump, gasNozzle) {
		if (fuelPump.gasNozzleConnectedList < 4) {
			fuelPump.gasNozzleConnectedList.push(gasNozzle.code);
			gasNozzle.fuelPumpConnected = fuelPump.code;
		}
	}
}
