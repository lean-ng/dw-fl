import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todos.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(todoRoutes)
  ]
})
export class TodosModule { }
