import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMiToKmPipe } from './convert-mi-to-km.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMiToKmPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
