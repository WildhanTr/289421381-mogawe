import { Component, OnInit } from "@angular/core";
import { GalleryFormQuestionnaire, Questionnaire } from "@app/model/questionnaire";
import { QuestionnaireService } from "@app/services/questionnaire.service";
import { ToastrService } from "ngx-toastr";
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { Section } from "@app/model/section";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { SectionService } from "@app/services/section.service";
import { FilterQuestionnaireComponent } from "./filter-questionnaire/filter-questionnaire.component";
import { NewFormComponent } from "./form/new-form/new-form.component";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.scss"],
})
export class QuestionnaireComponent implements OnInit {
  breadcrumb = [{ label: "BUSINESS" }, { label: "FORM", active: true }];
  currentUser;
  isLoading = false;
  
  subs: Subscription[] = [];

  query = "";
  page = 1;
  pageCount = 10;
  rowCount = 10;
  pageOffset = 15;
  maxPageSize = 10;

  questionnaires: Questionnaire[] = [];
  createNewQuestionnaire = new Questionnaire();
  errorMsg = "";

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService,
    private sectionService: SectionService,
    private toastrService: ToastrService,
    public dialog: MatDialog,
    private config: NgbPaginationConfig
  ) {
    this.config.size = "sm";
    this.config.boundaryLinks = true;
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser.uuidProject != null) {
      this.loadQuestionnaire();
      this.createNewQuestionnaire.uuidProject = this.currentUser.uuidProject;
    }
  }

  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  loadQuestionnaire() {
    this.isLoading = true;
    this.questionnaireService
      .getQuestionnaires(
        this.currentUser.uuidProject,
        this.query,
        this.page,
        this.pageOffset
      )
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.questionnaires = data.object;
          this.pageCount = data.pageCount;
          this.rowCount = data.rowCount;
        },
        (error) => {
          this.toastrService.error(error);
        }
      );
  }
  
  openFormDialog() {
    this.isLoading = true;
    
    const sub = this.questionnaireService.getGalleryForm(
      this.page,
      this.pageOffset
    ).subscribe(
      ({object}) => {
        this.isLoading = false;
        const modalConf: MatDialogConfig = {
          data: {
            listForm: object
          },
          width: "700px",
          disableClose: true,
        };
        this.dialog.open(NewFormComponent, modalConf)
      },
      err => this.toastrService.error(err)
    )
    this.subs.push(sub);
  }

  createQuestionnaire() {
    this.errorMsg = "";
    if (this.createNewQuestionnaire.name != "") {
      this.isLoading = true;
      this.questionnaireService
        .createQuestionnaire(this.createNewQuestionnaire)
        .subscribe(
          (data) => {
            var section = new Section();
            section.uuidQuestionnaire = data.uuid;
            section.name = "First Section";
            section.actionRules = "";
            this.sectionService.createSection(section).subscribe(
              (data) => {},
              (error) => {
                this.isLoading = false;
                this.errorMsg = error;
              }
            );
            this.router.navigate(["questionnaire/form", data.uuid]);
          },
          (error) => {
            this.isLoading = false;
            this.errorMsg = error;
          }
        );
    }
  }

  deleteQuestionnaire(uuid) {
    this.isLoading = true;
    this.questionnaireService.deleteQuestionnaire(uuid).subscribe(
      (data) => {
        this.isLoading = false;
        this.loadQuestionnaire();
      },
      (error) => {
        this.isLoading = false;
        this.toastrService.error(error);
      }
    );
  }

  filterQuestionnaire() {
    const dialogRef = this.dialog.open(FilterQuestionnaireComponent, {
      width: "600px",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadQuestionnaire();
    });
  }
}
