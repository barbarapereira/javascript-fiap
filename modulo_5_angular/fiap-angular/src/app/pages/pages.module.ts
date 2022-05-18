import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ListPageComponent
  ],
  exports: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
