import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hiragana', component: HiraganaComponent },
  { path: 'katakana', component: KatakanaComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HiraganaComponent,
    KatakanaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
