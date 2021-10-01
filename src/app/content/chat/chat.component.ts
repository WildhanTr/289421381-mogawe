import { Component, ElementRef, IterableDiffers, KeyValueDiffers, OnInit, ViewChild, Input, ViewChildren, QueryList } from '@angular/core';
import { ChatService } from '@app/services/chat.service';
import { MessagesChat } from '@app/model/messagesChat';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  breadcrumb = [{ label: 'CHAT', active: true }];

  currentUser;

  constructor(
    public dialog: MatDialog) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }

  ngOnInit(): void {
  
  }
}

