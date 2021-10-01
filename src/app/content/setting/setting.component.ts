import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingService } from '@app/services/setting.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  currentUser;

  constructor(
    public clientService: SettingService,
    public dialog: MatDialog,
    private config: NgbPaginationConfig) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.config.size = 'sm';
    this.config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }
}
