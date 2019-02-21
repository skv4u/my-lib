import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {MyLibModule} from 'my-lib';

import { AppComponent } from './app.component';
import { SkvCalenderComponent } from './skv-calender/skv-calender.component';
import { SkvEditorComponent } from './skv-editor/skv-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SkvCalenderComponent,
    SkvEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
