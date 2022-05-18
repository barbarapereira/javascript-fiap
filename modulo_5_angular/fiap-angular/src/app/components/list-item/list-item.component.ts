import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Output() myAntenna: EventEmitter<number>;

  constructor() {
    this.myAntenna = new EventEmitter();
   }

  ngOnInit(): void{
  }

  onClick(id: any): void {
    this.myAntenna.emit(id);
  }

}
