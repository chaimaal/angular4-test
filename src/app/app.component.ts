import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// @Component({
//   selector: 'app-root',
//   template: `   <h1>hey there </h1> 
//   				<p> {{myObject .location}}</p>
//   				<div *ngIf="mytext then templ1 ;else templ2"></div>
//   				<ng-template #templ1> Truth<ng-template>
//   				<ng-template #templ2> False<ng-template>

					// <img src="{{angularLogo}}">
  			// 	<img [src]="angularLogo">
  			// 	<img bind-src="angularLogo">
//   				`,
//   styleUrls: ['./app.component.css']
// })

// <img src="{{angularLogo}}"> string var

// <img [src]="angularLogo">  bool var
// <img bind-src="angularLogo"> bool var
@Component({
  selector: 'app-root',
  template: `   <h1 [class.red-title]= "titleClass">hey there </h1> 
			    <h1 [ngClass]= "titleClasses">hey there </h1> 

  				<button [disabled] = "buttonStatus" (mouseenter)="myEvent($event)"> Create</button>

  				
  				`,
  styles: [`
  h1{
  	text-decoration : underline;
  }
  .red-title{
  	color:gray
  }
  .large-title {
  	font-size:4em;
  }
  `]
})
export class AppComponent {
  // title = 'app';
  // myObject ={
  // 	gender:"male",
  // 	age:28,
  // 	location : "tunisia"
  // }
  // myarr= ['him','hers','yours'];
  // mytext= true;

  // angularLogo ='https://angular.io/resources/images/logos/angular/shield-large.svg'
  buttonStatus =false
  myEvent (event){
  	console.log(event)
  }
  titleClass = true
  titleClasses = {
  	'red-title':true,
  	'large-title': true
  }
}
