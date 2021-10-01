import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '@app/model/questionnaire';
import { QuestionnaireService } from '@app/services/questionnaire.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Section } from '@app/model/section';
import { SectionService } from '@app/services/section.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-others-form',
  templateUrl: './others-form.component.html',
  styleUrls: ['./others-form.component.scss']
})
export class OthersFormComponent implements OnInit {
  currentUser;
  isLoading = false;

  query = ""
  page = 1
  pageCount = 10;
  rowCount = 10;
  pageOffset = 15;
  maxPageSize = 10;

  questionnaires: Questionnaire[] = []
  createNewQuestionnaire = new Questionnaire;
  errorMsg = ""

  constructor(private router: Router,
    private questionnaireService: QuestionnaireService,
    private sectionService: SectionService,
    private toastrService: ToastrService,
    public dialogRef: MatDialogRef<OthersFormComponent>,
    private config: NgbPaginationConfig) {
    this.config.size = 'sm';
    this.config.boundaryLinks = true;
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (this.currentUser.uuidProject != null) {
      this.loadQuestionnaire()
      this.createNewQuestionnaire.uuidProject = this.currentUser.uuidProject
    }
  }

  ngOnInit(): void {
  }

  loadQuestionnaire() {
    this.isLoading = true
    this.questionnaireService.getQuestionnaires(this.currentUser.uuidProject, this.query, this.page, this.pageOffset)
      .subscribe(
        data => {
          this.isLoading = false
          this.questionnaires = data.object
          this.pageCount = data.pageCount
          this.rowCount = data.rowCount
        },
        error => {
          this.toastrService.error(error)
        }
      )
  }
  
  createQuestionnaire() {
    this.errorMsg = ""
    if (this.createNewQuestionnaire.name != "") {
      this.isLoading = true
      this.questionnaireService.createQuestionnaire(this.createNewQuestionnaire).subscribe(
        data => {
          this.goToQuestionnaire(data.uuid)
          var section = new Section()
          section.uuidQuestionnaire = data.uuid
          section.name = "First Section"
          section.actionRules = ""
          this.sectionService.createSection(section).subscribe(
            data => {
            }, error => {
              this.isLoading = false
              this.errorMsg = error
            })
        },
        error => {
          this.isLoading = false
          this.errorMsg = error
        }
      )
    }
  }

  goToQuestionnaire(uuid){
    this.router.navigate(['questionnaire/form', uuid]);
    this.dialogRef.close()
  }

  deleteQuestionnaire(uuid) {
    this.isLoading = true
    this.questionnaireService.deleteQuestionnaire(uuid).subscribe(
      data => {
        this.isLoading = false
        this.loadQuestionnaire()
      },
      error => {
        this.isLoading = false
        this.toastrService.error(error)
      }
    )
  }

}
