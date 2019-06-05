import { Route } from '@angular/router';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { AuthGuardGuard } from '../core/services/auth-guard.guard';

export const todoRoutes: Route[] = [
  { path: 'todos', component: TodoShellComponent,
    canActivate: [AuthGuardGuard]
}
];
