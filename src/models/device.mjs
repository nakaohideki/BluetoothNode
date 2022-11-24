export class device {
	constructor(type, counter, address) {
		this.type = type;
		this.counter = counter;
		this.code = type + " " + counter;
		this.address = address;
	}
	gasNozzleConnectedList = [];
}
