import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  myList = [
    {id: 1, name: 'nome-1'},
    {id: 2, name: 'nome-2'},
    {id: 3, name: 'nome-3'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(eventValue: any){
    console.log('Funcionu', eventValue);
  }

}
