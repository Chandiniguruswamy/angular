import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name="Anu";
  getName(){
    return "Alok"
  }
  arr=[1,2,3];
  Person={
    name:"amith"
  }
}
