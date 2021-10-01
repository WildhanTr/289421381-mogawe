import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog, Sort, ThemePalette } from '@angular/material';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '@app/services/data-service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  breadcrumb = [{ label: 'BUSINESS' }, { label: 'DATA', active: true }];

  currentUser;

  constructor(
    public dataService: DataService,
    public dialog: MatDialog,
    public datepipe: DatePipe,
    private config: NgbPaginationConfig) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.config.size = 'sm';
    this.config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}