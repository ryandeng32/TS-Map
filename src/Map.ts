export interface Mappable {
    location: {
        lat: number; 
        lng: number; 
    }
}

export class Map {
    private map: google.maps.Map; 

    constructor() {
        this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            center: {
                lat: 0, 
                lng: 0
            }
        });
    }

    addMarker(item: Mappable):void {
        const marker = new google.maps.Marker({
            position: item.location, 
            map: this.map, 
            title: "HI"
        })
    }
    
}