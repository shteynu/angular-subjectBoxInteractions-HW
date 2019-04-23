import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from "../message-box.service";

@Component({
  selector: 'app-r23',
  templateUrl: './r23.component.html',
  styleUrls: ['./r23.component.css']
})
export class R23Component implements OnInit {

  result;
  result2;

  constructor(private msgBox: MessageBoxService) { }

  ngOnInit() {
    this.msgBox.getMsgBox3().asObservable().subscribe((res)=>this.result2=res);
    this.msgBox.getMsgBox2().asObservable().subscribe((res)=>this.result=res);
  }

}
