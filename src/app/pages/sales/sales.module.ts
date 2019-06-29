import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { GuestCheckComponent } from './guest-check/guest-check.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [SummaryComponent, GuestCheckComponent, SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
