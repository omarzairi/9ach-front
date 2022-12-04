import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductRoutingModule } from './addproduct-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddproductComponent],
  imports: [CommonModule, AddproductRoutingModule, ReactiveFormsModule],
})
export class AddproductModule {}
