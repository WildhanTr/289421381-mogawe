import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-sign-supplier',
  templateUrl: './form-sign-supplier.component.html',
  styleUrls: ['./form-sign-supplier.component.scss']
})
export class FormSignSupplierComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormSignSupplierComponent>,) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close(true);
 }

}
