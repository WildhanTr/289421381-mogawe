import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormSignBusinessComponent } from './form-sign-business/form-sign-business.component';

@Component({
  selector: 'app-offer-business',
  templateUrl: './offer-business.component.html',
  styleUrls: ['./offer-business.component.scss']
})
export class OfferBusinessComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<OfferBusinessComponent>) { }

  ngOnInit(): void {
  }

  formSignBusiness() {
    const dialogRef = this.dialog.open(FormSignBusinessComponent, {
      width: "500px",
      data: { uuid: null },
      disableClose: true
    });
  }

  close(){
    this.dialogRef.close(true);
 }
  

}
