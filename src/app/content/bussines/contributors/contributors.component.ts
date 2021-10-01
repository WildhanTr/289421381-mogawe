import { Component, OnInit, ViewChildren, QueryList, ViewChild, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { ContributorService } from '@app/services/contributor.service';
import { Contributors } from '@app/model/contributors';
import { ContributorsExport } from '@app/model/contributorsExport'
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { DatePipe, DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx'
import * as moment from 'moment-timezone';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { QuickReportContributor } from '@app/model/quick-report/contributor';
import { NgbdSortableHeader, SortEvent } from '@app/sortable.directive';



@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})


export class ContributorsComponent implements OnInit {
  breadcrumb = [{ label: 'BUSINESS' }, { label: 'CONTRIBUTORS', active: true }];
  currentUser;

  constructor(
    public contributorService: ContributorService,
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
