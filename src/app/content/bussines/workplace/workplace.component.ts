import { Component, OnInit, ViewChild, ElementRef, Inject, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { WorkplaceService } from '@app/services/workplace.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {
  breadcrumb = [{ label: 'BUSINESS' }, { label: 'WORKPLACE', active: true }];

  constructor(
    public workplaceService: WorkplaceService,
    public dialog: MatDialog,
    private config: NgbPaginationConfig) {
    this.config.size = 'sm';
    this.config.boundaryLinks = true;
  }

  ngOnInit(): void {

  }
}
