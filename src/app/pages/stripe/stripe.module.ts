import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripePageRoutingModule } from './stripe-routing.module';

import { StripePage } from './stripe.page';
import { ComponentsModule } from "../../components/components.module";
import { StripeCardComponent, StripeElementsDirective } from 'ngx-stripe';


/* Stripe */
import { provideNgxStripe } from 'ngx-stripe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripePageRoutingModule,
    ComponentsModule,
    StripeElementsDirective,
    StripeCardComponent
],
  declarations: [StripePage],
  providers: [
    provideNgxStripe("pk_test_51HPaw3Juhvx3rFbqCYGcWqu317zNnJbxd54yaM0didohDYLUeGZTapVohCZyLoRPEjGG72mCYBl5wScnNzOyGnEE00HRyW3tOH"),
  ],
})
export class StripePageModule {}
