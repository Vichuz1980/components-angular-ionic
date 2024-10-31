import { Component } from '@angular/core';

export class Item{
  icon:string
  name:string
  redirectTo:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  items:Item[] = [
    {
      icon:'radio-button-on-outline',
      name: 'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'chatbubble-ellipses-outline',
      name: 'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'camera-outline',
      name: 'Camera',
      redirectTo:'/camera'
    },
    {
      icon:'card-outline',
      name: 'Stripe',
      redirectTo:'/stripe'
    },
    {
      icon:'location-outline',
      name: 'Location',
      redirectTo:'/location'
    }
  ]


}