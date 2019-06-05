import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanShellComponent } from './components/kanban-shell/kanban-shell.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataLoaderService } from './data-loader.service';

@NgModule({
  declarations: [KanbanShellComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'board', component: KanbanShellComponent,
        resolve: {
          msg: DataLoaderService
        }
    }
    ])
  ]
})
export class KanbanModule { }
