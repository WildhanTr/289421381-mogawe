import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormSignSupplierComponent } from './form-sign-supplier/form-sign-supplier.component';

@Component({
  selector: 'app-offer-supplier',
  templateUrl: './offer-supplier.component.html',
  styleUrls: ['./offer-supplier.component.scss']
})
export class OfferSupplierComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<OfferSupplierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){ }

  ngOnInit(): void {
  }


  formSignSupplier() {
    const dialogRef = this.dialog.open(FormSignSupplierComponent, {
      width: "500px",
      data: { uuid: null },
      disableClose: true
    });
  }

  close(){
    this.dialogRef.close(true);
 }

}
