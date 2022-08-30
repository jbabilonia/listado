import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.calculate();
  }
  title = 'Test-JB';
  public list = [1,9,5,0,20,-4,12,16,7];
  public referenceValue = 12;
  public strValueList = "";
  public strSumValues: any[] = [];

  calculate(){
    for (let x = 0; x < this.list.length; x++){
      this.strValueList = this.strValueList + (this.strValueList ? ',' : '') + this.list[x].toString(); 
      for (let i = x + 1 ; i < this.list.length; i++){
        if (this.list[x] + this.list[i] === this.referenceValue){
          const strValue = this.list[x] + ',' + this.list[i]
          this.strSumValues.push(strValue);
        }
      }
    }
  }
}