import { Person } from "./Person"; 
import { Dest } from "./Dest"; 
import { Map } from "./Map"; 

const person = new Person(); 
const dest = new Dest(); 
const map = new Map(); 

map.addMarker(person); 
map.addMarker(dest); 