import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'visitor';
  a = 0;
  b = 0;
  hasil = 0;

  

  hitung(a, b){
    this.hasil = Math.pow(a,b);
    return this.hasil;
  }
}
