import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DashboardService } from '@app/services/dashboard.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breadcrumb = [{ label: 'DASHBOARD', active: true }];
  
  currentUser;

  constructor(
    public dialog: MatDialog,
    public dashboardService: DashboardService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }
  
  ngOnInit(): void {
    
  }
}
