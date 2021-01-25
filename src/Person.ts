import faker from "faker"; 

export class Person {
    name: string;   
    location: {
        lat: number;
        lng: number; 
    }

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`; 
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}