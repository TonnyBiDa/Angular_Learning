import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';      //<-----for using ngModel
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule                                  //<-----for using ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
