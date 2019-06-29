import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { GuestCheckComponent } from './guest-check/guest-check.component';
import { SalesComponent } from './sales/sales.component';
import { OrderPadComponent } from './order-pad/order-pad.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SummaryComponent,
    GuestCheckComponent,
    SalesComponent,
    OrderPadComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SalesModule {}
