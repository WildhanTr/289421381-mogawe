import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Section } from '@app/model/section';
import { SectionService } from '@app/services/section.service';
import { FormControl, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  section = new Section;
  errorMsg = ""
  isLoading = false

  sectionName = new FormControl('', [
    Validators.required
  ]);
  actionRules = new FormControl();
  
  @ViewChild('deleteSwalSection') private deleteSwalSection: SwalComponent;
  @ViewChild('deleteConfirmSwalSection') private deleteConfirmSwalSection: SwalComponent;

  constructor(public sectionService: SectionService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NewSectionComponent>,
    private toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Section) { 
      if (data.uuid != null && data.uuid != "") {
        this.sectionService.getSectionDetail(data.uuid).subscribe(
          data => {
            this.section = data.object
          }, error => {
          })
      }
      this.section.uuid = data.uuid
      this.section.uuidQuestionnaire = data.uuidQuestionnaire
    }

  ngOnInit(): void {
  }

  saveSection(){
    this.errorMsg = ""
    if (this.section.uuid != "" && this.section.uuid != null) {
      if (this.section.name != "" && this.section.name != null) {
        this.errorMsg = ""
        this.isLoading = true
        this.sectionService.updateSection(this.section).subscribe(
          data => {
            this.dialogRef.close(true)
          },
          error => {
            this.isLoading = false
            this.errorMsg = error
          }
        )
      }
    } else {
      if (this.section.name != "") {
        this.isLoading = true
        this.sectionService.createSection(this.section).subscribe(
          data => {
            this.dialogRef.close(true)
            this.isLoading = false
          },
          error => {
            this.isLoading = false
            this.errorMsg = error
          }
        )
      }
    }
  }

  uuidSection: string;
  public showDeleteSectionConfirm(uuid) {
    this.uuidSection = uuid
    this.deleteSwalSection.fire()
  }

  public deleteSectionConfirm() {
    this.deleteSection(this.uuidSection)
  }
  public deleteSectionCancel() {
    this.deleteSwalSection.dismiss()
  }

  deleteSection(uuid) {
    this.sectionService.deleteSection(uuid).subscribe(
      data => {
        this.dialogRef.close(true)
      },
      error => {
        this.toastrService.error(error)
      }
    )
  }

}
