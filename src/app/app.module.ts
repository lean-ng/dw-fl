import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { TodosModule } from './todos/todos.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './core/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then( m => m.KanbanModule ) },
      { path: '**', component: HomeComponent }
    ], {
      enableTracing: environment.production === false
    }),

    TodosModule,

    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
