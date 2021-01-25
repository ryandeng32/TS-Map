import faker from "faker"; 
import { Mappable } from "./Map"; 

export class Dest implements Mappable {
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