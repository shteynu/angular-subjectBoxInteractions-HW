import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  static messageBox: Subject<any> = new Subject<any>();


  constructor() { }

  getMsgBox() {
    return MessageBoxService.messageBox;
  }

}
