import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-form-sign-business',
  templateUrl: './form-sign-business.component.html',
  styleUrls: ['./form-sign-business.component.scss']
})
export class FormSignBusinessComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormSignBusinessComponent>,) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close(true);
 }

}
