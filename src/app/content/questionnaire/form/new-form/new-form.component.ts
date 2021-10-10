import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { GalleryFormQuestionnaire } from "@app/model/questionnaire";
import { QuestionnaireService } from '@app/services/questionnaire.service';
import { TemplateFormComponent } from "../template-form/template-form.component";


@Component({
    selector: 'app-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.scss', '../form.component.scss']
  })
  export class NewFormComponent implements OnInit {
    
    galleryFormQuestionnaire: GalleryFormQuestionnaire[] = [];
    
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data,
      private dialog: MatDialog
    ) { 
      this.galleryFormQuestionnaire = data.listForm;
    }
  
    ngOnInit(): void {
    }
    
    openSpecificForm(item: any){
      const modalConf: MatDialogConfig = {
        data: item,
        width: '90vw',
        height: '90vh',
        minWidth: '300px',
        disableClose: true
      }
      this.dialog.open(TemplateFormComponent, modalConf)
    }
  
  }