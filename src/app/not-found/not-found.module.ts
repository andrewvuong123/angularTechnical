import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    InfiniteTypeDeleteModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
