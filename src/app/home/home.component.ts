import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name:string="ranjith";
  age:number=25;
  ee:boolean=false;
  inputval:string="";
  gett:string="";

  handeldisable(){
  this.ee=true;



  }

  getval(event:Event)
  {
    console.log(event);
  this.name=(<HTMLInputElement>event.target).value;
    

  }
  


}
