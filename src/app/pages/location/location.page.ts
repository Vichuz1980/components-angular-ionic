import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  coordinates:any
  location:string
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates);
    
    this.location = 'Latitud: '+ coordinates.coords.latitude + ' Longitude:' + coordinates.coords.longitude
  };
  


}
