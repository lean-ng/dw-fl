import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

// Core Module
// Single Use Components (aka Login-View, aka HomeScreen)

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
