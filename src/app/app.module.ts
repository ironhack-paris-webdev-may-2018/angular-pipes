import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptTrackerComponent } from './crypt-tracker/crypt-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';
import { EmojifyPipe } from './pipes-folder/emojify.pipe';
import { FacesOfBenicioComponent } from './faces-of-benicio/faces-of-benicio.component';
import { ActorFilterPipe } from './pipes-folder/actor-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CryptTrackerComponent,
    DateChangerComponent,
    EmojifyPipe,
    FacesOfBenicioComponent,
    ActorFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
