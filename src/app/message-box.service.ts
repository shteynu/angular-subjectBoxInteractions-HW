import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  static messageBox: Subject<any> = new Subject<any>();
  static messageBoxTwo: Subject<any> = new Subject<any>();
  static messageBoxThree:Subject<any> = new Subject<any>();


  constructor() { }

  getMsgBox() {
    return MessageBoxService.messageBox;
  }
  getMsgBox2(){
    return MessageBoxService.messageBoxTwo;
  }
  getMsgBox3(){
    return MessageBoxService.messageBoxThree;
  }

}
