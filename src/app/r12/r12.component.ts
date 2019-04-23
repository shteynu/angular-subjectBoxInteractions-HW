import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-r12',
  templateUrl: './r12.component.html',
  styleUrls: ['./r12.component.css']
})
export class R12Component implements OnInit {

  result;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
    this.msgBox.getMsgBox().asObservable().subscribe((res)=>this.result=res);

  }

}
