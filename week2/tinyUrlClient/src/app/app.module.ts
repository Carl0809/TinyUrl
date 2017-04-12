import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent, HomeComponent } from './components/index';

import { UrlService } from './services/url.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'client/about', component: AboutComponent },
  { path: 'client/home', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
