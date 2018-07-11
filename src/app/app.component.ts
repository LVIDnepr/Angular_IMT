import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calc';
  operant1: number;
  operant2: number;
  result: number;
  errorInput: boolean = false;
  resultInvisible: boolean = true;

  onOperant1(e) {
    this.operant1 = Number(e.target.value);
  }

  onOperant2(e) {
    this.operant2 = Number(e.target.value);
  }

  onPlus() {
   if(this. operant1 === undefined || this.operant2 === undefined) {
      this.errorInput = true;
    } else {
      this.errorInput = false;
      this.resultInvisible = false;
      this.result = this.operant1 + this.operant2;
    }  
  }
}
