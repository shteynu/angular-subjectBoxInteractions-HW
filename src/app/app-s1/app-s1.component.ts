import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-app-s1',
  templateUrl: './app-s1.component.html',
  styleUrls: ['./app-s1.component.css']
})
export class AppS1Component implements OnInit {

  val;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
  }

  send(){
    this.msgBox.getMsgBox().next(this.val);
    this.msgBox.getMsgBox2().next(this.val);
  }

}
