import { Person } from "./Person"; 
import { Dest } from "./Dest"; 

const person = new Person(); 
const dest = new Dest(); 

console.log(`name: ${person.name}`); 
console.log(`lat: ${person.location.lat} ${person.location.lng}`); 

console.log(`name: ${dest.name}`); 
console.log(`lat: ${dest.location.lat} ${dest.location.lng}`); 
