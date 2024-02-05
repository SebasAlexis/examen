import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegulacionesComponent } from './components/regulaciones/regulaciones.component';
import { FinalComponent } from './components/final/final.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { InformacionService } from './services/informacion.service';

const rutas: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'regulaciones', component: RegulacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegulacionesComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
