import faker from "faker"; 

export class Dest {
    name: string;   
    location: {
        lat: number;
        lng: number; 
    }

    constructor() {
        this.name = faker.address.streetName(); 
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}