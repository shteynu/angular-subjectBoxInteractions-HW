import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-r13',
  templateUrl: './r13.component.html',
  styleUrls: ['./r13.component.css']
})
export class R13Component implements OnInit {
  result;
  result2;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
    this.msgBox.getMsgBox().asObservable().subscribe((res)=>this.result=res);
    this.msgBox.getMsgBox3().asObservable().subscribe((res)=>this.result2=res);
  }

}
