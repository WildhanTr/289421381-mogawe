import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductService } from '@app/services/supplier/product.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  breadcrumb = [{ label: 'SUPPLIER' }, { label: 'PRODUCTS', active: true }];
  
  constructor(
    public productService: ProductService,
    public dialog: MatDialog,
    public datepipe: DatePipe) {
      
  }

  ngOnInit(): void {
  }
}
