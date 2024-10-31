import { Component, OnInit, ViewChild } from '@angular/core';

import {
  injectStripe,
  StripeCardComponent,
  StripeService
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
  
})
export class StripePage {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  stripe = injectStripe("pk_test_51HPaw3Juhvx3rFbqCYGcWqu317zNnJbxd54yaM0didohDYLUeGZTapVohCZyLoRPEjGG72mCYBl5wScnNzOyGnEE00HRyW3tOH");
  isVisible:boolean = false
  message:string

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  createToken() {
    this.isVisible = true
    const name = 'Victor Hugo Coronado';

    this.stripe
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          
          let paymentMethod:string = result.token.id;

          this.cretePaymentMethod(paymentMethod)

        } else if (result.error) {

          this.message =result.error.message
          
          this.isVisible = false

        }
      });
  }

  cretePaymentMethod(paymentMethod:string){

    const name = 'Victor Hugo Coronado';

    this.stripe
      .createPaymentMethod({
        type: 'card',
        card: this.card.element,
        billing_details: {name},
      })
      .subscribe((result) => {

        this.message = 'Completed token ' + result.paymentMethod.id
        
    });
    

  }
}
