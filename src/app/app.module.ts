import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <-- Add this for formGroup and other reactive form features
    CommonModule, // <-- Add this for directives like *ngIf, *ngFor
    // HttpClientModule, // Add HttpClientModule to imports
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
