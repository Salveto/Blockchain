import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    var temp = this.data;
    this.clearVal();
    return temp;
  }

  clearVal() {
    this.data = undefined;
  }
}
