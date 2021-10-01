import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  closeResult: string;
  breadcrumb = [{label: 'Bussiness'}, {label: 'Create Job', active: true}];
  isLinear = false;
  nameYourBusiness: FormGroup;
  addJob : FormGroup;
  chooseForm: FormGroup;
  finish: FormGroup;

  constructor(private _formBuilder: FormBuilder, private modalService: NgbModal, private router: Router) { }

  open(content) {
    this.modalService.open(content, {size: 'lg' ,ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit(): void {
    this.addJob = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.chooseForm = this._formBuilder.group({
      thridCtrl: ['', Validators.required]
    });
    this.finish = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  cancelClick(){
    this.router.navigate(['/business/job']);
  }

  saveTutorial(){
    
  }
  

}
