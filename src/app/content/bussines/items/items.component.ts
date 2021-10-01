import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  breadcrumb = [{label: 'BUSINESS'}, {label: 'ITEMS', active: true}];

  constructor() { }

  ngOnInit(): void {
  }

}
