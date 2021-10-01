import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-setup',
  templateUrl: './payment-setup.component.html',
  styleUrls: ['./payment-setup.component.scss']
})
export class PaymentSetupComponent implements OnInit {
  breadcrumb = [{label: 'BUSINESS'}, {label: 'PAYMENT SETUP', active: true}];

  constructor() { }

  ngOnInit(): void {
  }

}
