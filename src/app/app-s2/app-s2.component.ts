import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-app-s2',
  templateUrl: './app-s2.component.html',
  styleUrls: ['./app-s2.component.css']
})
export class AppS2Component implements OnInit {

  val;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
  }

  send(){
    this.msgBox.getMsgBox2().next(this.val);
  }

}
