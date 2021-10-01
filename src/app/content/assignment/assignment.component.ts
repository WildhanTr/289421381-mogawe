import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '@app/services/assignment.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  breadcrumb = [{ label: 'ASSIGNMENT', active: true }];
  
  currentUser;

  constructor(
    public assignmentService: AssignmentService,
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
