import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => console.log(err));