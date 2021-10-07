import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { GalleryFormQuestionnaire, TemplateFormEntry } from "@app/model/questionnaire";
import { QuestionnaireService } from '@app/services/questionnaire.service';
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.scss', '../form.component.scss']
  })
  export class TemplateFormComponent implements OnInit {
    item: TemplateFormEntry = new TemplateFormEntry();
    titleForm = '';
    
    subs: Subscription[] = [];

    
    listDummyInput: any[] = [
      {
        label: 'Nama',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.picName,
      },
      {
        label: 'Umur',
        placeholder: 'Ketik disini ya',
        type: 'number',
        models: this.item.age,
      },
      {
        label: 'Nama Penerima',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.receiverName,
      },
      {
        label: 'Nama Barang',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.prodName,
      },
      {
        label: 'Merek Barang',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.prodMerk,
      },
      {
        label: 'Alamat Pengirim',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.originAddressShipping,
      },
      {
        label: 'Alamat Penerima',
        placeholder: 'Ketik disini ya',
        type: 'text',
        models: this.item.destAddressShipping,
      },
      {
        label: 'Berat Barang',
        placeholder: 'Ketik disini ya',
        type: 'number',
        models: 'item.totalWeight',
      },
    ]
    
    constructor(
      @Inject(MAT_DIALOG_DATA) public data,
      private service: QuestionnaireService,
      private toastService: ToastrService,
      private dialogRef: MatDialog
    ) { 
      this.titleForm = data.questionnaireName + ' Form';
    }
  
    ngOnInit(): void {
    }
    
    copyTemplate(){
      const sub = this.service.copyQuestionnaireTemplate({uuidQuestionnaire: this.data.uuidQuestionnaire,
      name: this.data.questionnaireName}).subscribe(
        (res) => {
          this.dialogRef.closeAll();
          this.toastService.success(res.message)
        },
        (err) => this.toastService.error(err)
      );
      this.subs.push(sub);
    }
    
    ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
    }
  
  }