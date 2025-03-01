// Complete the js code
class Car {
	constructor(make,model){
		this.maker = make;
		this.modil = model;
	}
	getMakeModel(){
		return `${this.maker} ${this.modil}`
	}
}

class SportsCar extends Car{
	constructor(make, model, topSpeed){
		this.maker = make;
		this.modil = model;
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
