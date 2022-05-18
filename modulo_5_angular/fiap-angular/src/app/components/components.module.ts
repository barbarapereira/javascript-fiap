import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
