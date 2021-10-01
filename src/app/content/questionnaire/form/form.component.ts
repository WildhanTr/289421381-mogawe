import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { QuestionnaireService } from '@app/services/questionnaire.service';
import { ToastrService } from 'ngx-toastr';
import { Questionnaire } from '@app/model/questionnaire';
import { ActivatedRoute } from '@angular/router';
import { Section } from '@app/model/section';
import { SectionService } from '@app/services/section.service';
import { FactService } from '@app/services/fact.service';
import { Fact } from '@app/model/fact';
import { MatDialog, MatAccordion, MatDialogRef } from '@angular/material';
import { Groupjob } from '@app/model/groupjob';
import { NewFactComponent } from './new-fact/new-fact.component';
import { NewSectionComponent } from './new-section/new-section.component';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { OthersFormComponent } from '../others-form/others-form.component';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  breadcrumb = [{ label: 'Questionnaire' }, { label: 'Form', active: true }];

  colorToogle: ThemePalette = 'primary';
  selectionFactPreview: string;
  @ViewChild('formIdentity') formIdentity: FormGroupDirective;
  @ViewChild('formAddQuestion') formAddQuestion: FormGroupDirective;

  previewActive = true
  mediaFact = ["9b01ba60-1b42-43c1-a609-c1e6a4ca79a8", "b019f6f3-363e-4224-a8cd-41905fc056b6"]
  selectionFact = ["a2059c4a-e4ca-4e11-b9ab-cc4e82492209", "b7c1a240-9d0f-4018-99ed-5dab77a79e90", "50cd1934-0ce8-4a6a-bf86-5b2b4a49548b", "faaadd66-2a13-4542-ae60-a72bb75334c6", "49d31e3a-3693-4938-be4a-847d223cfb6d", "40d8560a-09c8-4024-86fc-8f79821af2a9", "5851df88-46af-4d7f-8b4d-f6390c7f9b69", "3a7adde3-e744-423c-a2c0-e3da3e2a57fb", "4169d56c-b7a0-42d5-9157-1a86eeb4e516"]

  //Questionnaire
  uuidQuestionnaire: string
  questionnaire = new Questionnaire
  loadingQuestionnaire = false
  errorMsg = ""

  nameQuestionnaire = new FormControl('', [
    Validators.required
  ])

  //Section
  sections: Section[] = []
  sectionsPreview = new Section
  loadingSections = false

  //Fact
  saveFact = new Fact;
  saveFactLoading = false
  facts: Fact[] = []
  factType = null
  loadingFacts = false
  changeSort = false

  @ViewChild('deleteSwalSection') private deleteSwalSection: SwalComponent;
  @ViewChild('deleteConfirmSwalSection') private deleteConfirmSwalSection: SwalComponent;
  @ViewChild('deleteSwalFact') private deleteSwalFact: SwalComponent;
  @ViewChild('deleteConfirmSwalFact') private deleteConfirmSwalFact: SwalComponent;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private questionnaireService: QuestionnaireService,
    private sectionService: SectionService,
    private factService: FactService,
    private toastrService: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute) {
    const uuidQuestionnaire: string = route.snapshot.params.id
    this.uuidQuestionnaire = uuidQuestionnaire;
    if (uuidQuestionnaire != "0" && uuidQuestionnaire != null) {
      this.loadingQuestionnaire = true
      this.questionnaireService.getQuestionnairesDetail(uuidQuestionnaire).subscribe(
        data => {
          this.loadingQuestionnaire = false
          this.questionnaire = data.object
          this.getSections(this.uuidQuestionnaire)
          this.factService.getFactType().subscribe(
            data => {
              this.factType = data.object
            }, error => {
            }
          )
        }, error => {
          this.loadingQuestionnaire = false
        })
    }
  }

  ngOnInit(): void {

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  dropFact(event: CdkDragDrop<string[]>, fact) {
    this.changeSort = true
    moveItemInArray(fact, event.previousIndex, event.currentIndex);
    fact.forEach((value, index) => {
      value.sequence = index
      this.factService.updateFact(value).subscribe(
        data => {
          this.changeSort = false
        },
        error => {
          this.errorMsg = error
        }
      )
    });
  }

  dropSection(event: CdkDragDrop<string[]>) {
    this.changeSort = true
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
    this.step = event.currentIndex;
    this.sections.forEach((value, index) => {
      value.sort = index
      this.sectionService.updateSection(value).subscribe(
        data => {
          this.changeSort = false
        },
        error => {
          this.errorMsg = error
        }
      )
    });
  }

  saveQuestionnaire() {
    this.errorMsg = ""
    this.questionnaireService.updateQuestionnaire(this.questionnaire).subscribe(
      data => {

      },
      error => {
        this.errorMsg = error
      }
    )
    if (this.saveFact.uuid != "" && this.saveFact.uuid != null) {
      if (this.saveFact.label != "" && this.saveFact.label != null) {
        this.errorMsg = ""
        this.saveFactLoading = true

        if (!this.selectionFact.includes(this.saveFact.uuidFactType) && !this.mediaFact.includes(this.saveFact.uuidFactType)) {
          this.saveFact.value = ""
        } else {

          if (this.selectionFact.includes(this.saveFact.uuidFactType)) {
            var newValueArray = ""
            this.saveFact.valueArray.forEach((va, i) => {
              if (i != 0)
                newValueArray += ","
              newValueArray += va.value
            })
            this.saveFact.value = newValueArray
          }

        }

        this.factService.updateFact(this.saveFact).subscribe(
          data => {
            this.saveFactLoading = false
            this.getSections(this.uuidQuestionnaire)
          },
          error => {
            this.saveFactLoading = false
            this.errorMsg = error
          }
        )
      }
    }
  }

  selectedSectionPreview = 0
  indexSectionPreview = 0
  getSections(uuidQuestionnaire: string) {
    this.loadingSections = true
    this.sectionService.getSections(uuidQuestionnaire).subscribe(
      data => {
        this.loadingSections = false
        this.sections = data.object
        this.sectionsPreview = data.object[this.selectedSectionPreview]
      }, error => {
        this.loadingSections = false
      })
  }


  nextSection(){
    this.selectedSectionPreview = this.selectedSectionPreview + 1
    this.sectionsPreview = this.sections[this.selectedSectionPreview]
    this.indexSectionPreview = this.selectedSectionPreview + 1
  }

  backSection(){
    this.selectedSectionPreview = this.selectedSectionPreview - 1
    this.sectionsPreview = this.sections[this.selectedSectionPreview]
    this.indexSectionPreview = this.indexSectionPreview - 1
  }

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };

  getFact(uuidSection: string) {
    this.loadingFacts = true
    this.factService.getFactDetail(uuidSection).subscribe(
      data => {
        this.loadingFacts = false
        this.previewActive = false
        this.saveFact = data.object

        this.saveFact.valueArray = []
        if (this.saveFact.value == null || this.saveFact.value == "") {
          this.saveFact.value = ""
        } else {
          if (this.saveFact.uuidFactType == "a2059c4a-e4ca-4e11-b9ab-cc4e82492209" || this.saveFact.uuidFactType == "b7c1a240-9d0f-4018-99ed-5dab77a79e90" || this.saveFact.uuidFactType == "50cd1934-0ce8-4a6a-bf86-5b2b4a49548b" || this.saveFact.uuidFactType == "faaadd66-2a13-4542-ae60-a72bb75334c6" || this.saveFact.uuidFactType == "49d31e3a-3693-4938-be4a-847d223cfb6d" || this.saveFact.uuidFactType == "40d8560a-09c8-4024-86fc-8f79821af2a9" || this.saveFact.uuidFactType == "5851df88-46af-4d7f-8b4d-f6390c7f9b69" || this.saveFact.uuidFactType == "3a7adde3-e744-423c-a2c0-e3da3e2a57fb" || this.saveFact.uuidFactType == "4169d56c-b7a0-42d5-9157-1a86eeb4e516") {
            // var fvalueArray = this.saveFact.value.split(",")
            // fvalueArray.forEach(fvalue => {
            //   this.saveFact.valueArray.push(fvalue)
            // });
            var fvalueArray = this.saveFact.value.split(",")
            fvalueArray.forEach(fvalue => {
              this.saveFact.valueArray.push(
                {
                  value: fvalue
                }
              )
            });
          }
        }
      }, error => {
        this.loadingFacts = false
        this.previewActive = true
      }
    )
  }

  newFact(uuidSection: string) {
    var fact = new Groupjob()
    fact.uuid = null
    fact.uuidSection = uuidSection
    fact.uuidQuestionnaire = this.uuidQuestionnaire
    const dialogRef = this.dialog.open(NewFactComponent, {
      width: "600px",
      data: fact
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getSections(this.uuidQuestionnaire)
    });
  }

  newFactValue(fact) {
    fact.valueArray.push({ value: "" })
  }


  deleteFactValue(fact, i) {
    fact.valueArray.splice(i, 1)
  }

  dropValueArray(valueArray, event) {
    moveItemInArray(valueArray, event.previousIndex, event.currentIndex);
  }

  othersForm() {
    const dialogRef = this.dialog.open(OthersFormComponent, {
      width: "900px",
    });
    dialogRef.afterClosed().subscribe(result => {
      const uuidQuestionnaire: string = this.route.snapshot.params.id
      this.uuidQuestionnaire = uuidQuestionnaire;
      this.questionnaireService.getQuestionnairesDetail(uuidQuestionnaire).subscribe(
        data => {
          this.loadingQuestionnaire = false
          this.questionnaire = data.object
          this.getSections(uuidQuestionnaire)
        }, error => {
          this.loadingQuestionnaire = false
        })
    });
  }


  setFact(data) {
    var fact = new Groupjob()
    fact.uuid = data.uuid
    fact.uuidSection = data.uuidSection
    const dialogRef = this.dialog.open(NewFactComponent, {
      width: "600px",
      data: fact
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getSections(this.uuidQuestionnaire)
    })
  }

  newSection(uuidQuestionnaire: string) {
    this.loadingSections = true
    var section = new Groupjob()
    section.uuid = null
    section.uuidQuestionnaire = uuidQuestionnaire
    section.name = "New Section";
    this.sectionService.createSection(section).subscribe(
      data => {
        this.loadingSections = false
        this.getSections(this.uuidQuestionnaire)
      },
      error => {
        this.loadingSections = false
        this.errorMsg = error
      }
    )
  }

  setSection(data) {
    var section = new Groupjob()
    section.uuid = data.uuid
    section.uuidQuestionnaire = data.uuidQuestionnaire
    const dialogRef = this.dialog.open(NewSectionComponent, {
      width: "600px",
      data: section
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getSections(this.uuidQuestionnaire)
    })
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
    this.loadingSections = true
    this.sectionService.deleteSection(uuid).subscribe(
      data => {
        this.loadingSections = false
        this.getSections(this.uuidQuestionnaire)
      },
      error => {
        this.loadingSections = false
        this.toastrService.error(error)
      }
    )
  }

  uuidFact: string;
  public showDeleteFactConfirm(uuid) {
    this.uuidFact = uuid
    this.deleteSwalFact.fire()
  }

  public deleteFactConfirm() {
    this.deleteFact(this.uuidFact)
  }
  public deleteFactCancel() {
    this.deleteSwalFact.dismiss()
  }

  deleteFact(uuid) {
    this.loadingFacts = true
    this.factService.deleteFact(uuid).subscribe(
      data => {
        this.loadingSections = false
        this.getSections(this.uuidQuestionnaire)
      },
      error => {
        this.loadingSections = false
        this.toastrService.error(error)
      }
    )
  }

  

}
