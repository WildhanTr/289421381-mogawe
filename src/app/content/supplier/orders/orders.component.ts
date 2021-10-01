import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderService } from '@app/services/supplier/order.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  breadcrumb = [{ label: 'SUPPLIER' }, { label: 'ORDERS', active: true }];
  
  constructor(
    public orderService: OrderService,
    public dialog: MatDialog) {
      
  }

  ngOnInit(): void {
  }
}
