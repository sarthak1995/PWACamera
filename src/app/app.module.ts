import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './services/app-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HangerComponent } from './components/hanger/hanger.component';
import { ETasksComponent } from './components/e-tasks/e-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    HangerComponent,
    ETasksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
