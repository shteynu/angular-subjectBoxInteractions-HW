import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-app-s3',
  templateUrl: './app-s3.component.html',
  styleUrls: ['./app-s3.component.css']
})
export class AppS3Component implements OnInit {

  val;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {}

  send(){
    this.msgBox.getMsgBox3().next(this.val);
  }


}
