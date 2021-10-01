import { Component, OnInit, ViewChild, ElementRef, Inject, ViewChildren, QueryList } from '@angular/core';
import { JobService } from '@app/services/job.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common'
import { AssignmentService } from '@app/services/assignment.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  breadcrumb = [{ label: 'BUSINESS' }, { label: 'JOB', active: true }];

  currentUser;
  
  constructor(
    public assignmentService: AssignmentService,
    public jobService: JobService,
    public dialog: MatDialog,
    public datepipe: DatePipe,
    private config: NgbPaginationConfig) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.config.size = 'sm';
    this.config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }
}
