import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  currentUser;
  
  constructor(
    
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }

  ngOnInit(): void {
  }

}
