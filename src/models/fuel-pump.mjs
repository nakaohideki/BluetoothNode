import { device } from "./device.mjs";

export class fuelPump extends device {
	constructor(type, counter, address) {
		super(type, counter, address);
	}
	gasNozzleConnectedList = [];
}
