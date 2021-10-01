import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
import { Fact } from '@app/model/fact';
import { FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FactService } from '@app/services/fact.service';

@Component({
  selector: 'app-new-fact',
  templateUrl: './new-fact.component.html',
  styleUrls: ['./new-fact.component.scss']
})
export class NewFactComponent implements OnInit {
  fact = new Fact;
  factType = null;
  errorMsg = ""
  isLoading = false

  colorToogle: ThemePalette = 'primary';

  mediaFact = ["9b01ba60-1b42-43c1-a609-c1e6a4ca79a8", "b019f6f3-363e-4224-a8cd-41905fc056b6"]
  selectionFact = ["a2059c4a-e4ca-4e11-b9ab-cc4e82492209", "b7c1a240-9d0f-4018-99ed-5dab77a79e90", "50cd1934-0ce8-4a6a-bf86-5b2b4a49548b", "faaadd66-2a13-4542-ae60-a72bb75334c6", "49d31e3a-3693-4938-be4a-847d223cfb6d", "40d8560a-09c8-4024-86fc-8f79821af2a9", "5851df88-46af-4d7f-8b4d-f6390c7f9b69", "3a7adde3-e744-423c-a2c0-e3da3e2a57fb", "4169d56c-b7a0-42d5-9157-1a86eeb4e516"]


  typeFact = new FormControl('', [
    Validators.required
  ])
  labelFact = new FormControl('', [
    Validators.required
  ])
  valueFact = new FormControl()
  actionRules = new FormControl()
  hintName = new FormControl()

  constructor(public factService: FactService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NewFactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fact) {
    this.factService.getFactType().subscribe(
      data => {
        this.factType = data.object
      }, error => {
        console.log(error)
      }
    )
    if (data.uuid != null && data.uuid != "") {
      this.factService.getFactDetail(data.uuid).subscribe(
        data => {
          this.fact = data.object
          this.fact.valueArray = []
          if (this.fact.value == null || this.fact.value == "") {
            this.fact.value = ""
          } else {
            if (this.fact.uuidFactType == "a2059c4a-e4ca-4e11-b9ab-cc4e82492209" || this.fact.uuidFactType == "b7c1a240-9d0f-4018-99ed-5dab77a79e90" || this.fact.uuidFactType == "50cd1934-0ce8-4a6a-bf86-5b2b4a49548b" || this.fact.uuidFactType == "faaadd66-2a13-4542-ae60-a72bb75334c6" || this.fact.uuidFactType == "49d31e3a-3693-4938-be4a-847d223cfb6d" || this.fact.uuidFactType == "40d8560a-09c8-4024-86fc-8f79821af2a9" || this.fact.uuidFactType == "5851df88-46af-4d7f-8b4d-f6390c7f9b69" || this.fact.uuidFactType == "3a7adde3-e744-423c-a2c0-e3da3e2a57fb" || this.fact.uuidFactType == "4169d56c-b7a0-42d5-9157-1a86eeb4e516") {
              var fvalueArray = this.fact.value.split(",")
              fvalueArray.forEach(fvalue => {
                this.fact.valueArray.push(
                  {
                    value: fvalue
                  }
                )
              });
            }
          }
        }, error => {
        })
    }
    this.fact.uuid = data.uuid
    this.fact.uuidSection = data.uuidSection
    this.fact.uuidQuestionnaire = data.uuidQuestionnaire
  }

  ngOnInit(): void {
  }

  saveFact() {
    this.errorMsg = ""
    if (!this.selectionFact.includes(this.fact.uuidFactType) && !this.mediaFact.includes(this.fact.uuidFactType)) {
      this.fact.value = ""
    } else {

      if (this.selectionFact.includes(this.fact.uuidFactType)) {
        var newValueArray = ""
        this.fact.valueArray.forEach((va, i) => {
          if (i != 0)
            newValueArray += ","

          newValueArray += va.value
        })
        this.fact.value = newValueArray
      }

    }
    if (this.fact.uuid != "" && this.fact.uuid != null) {
      if (this.fact.label != "" && this.fact.label != null) {
        this.errorMsg = ""
        this.isLoading = true
        this.factService.updateFact(this.fact).subscribe(
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
      if (this.fact.label != "") {
        this.isLoading = true
        this.factService.createFact(this.fact).subscribe(
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

  newFactValue(fact) {
    fact.valueArray.push({ value: "" })
  }


  deleteFactValue(fact, i) {
    fact.valueArray.splice(i, 1)
  }

  dropValueArray(valueArray, event) {
    moveItemInArray(valueArray, event.previousIndex, event.currentIndex);
  }

}
