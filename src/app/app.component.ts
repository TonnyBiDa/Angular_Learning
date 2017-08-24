import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3 (click)="onSelect()" [class.clicked]="showdetails===true">
  			{{table.lastName}} {{table.firstName}}
  			</h3>
  			<input type="text" [(ngModel)]= "table.lastName" >
  			<div *ngIf="showdetails===true">
  				E-mail: {{table.email}} <br>
  				phone: {{table.phone}}

  			</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public table = {firstName:'Tony', lastName:'Bi', 
  email:'tonnybida@gmail.com', phone:'021620075'};
  public showdetails = false;
  public i=0;
  onSelect(){
  	this.i++;
  	console.log(this.i)
  	if (this.i%2===0){
  		console.log('good')
  	this.showdetails = false;}else{this.showdetails = true}
  }
};
