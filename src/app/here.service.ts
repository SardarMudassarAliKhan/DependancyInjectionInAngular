import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HereService {
  data = { name: 'Sardar Mudassar Ali Khan'}
  constructor() { }

  getData() {
    debugger;
    return this.data.name;
  }
}
