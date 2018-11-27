import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { AppComponent, FilterPhotosPipe } from './app.component';
import { PhotoServiceService } from './photo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPhotosPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [PhotoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
