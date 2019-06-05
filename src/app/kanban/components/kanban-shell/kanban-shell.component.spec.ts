import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanShellComponent } from './kanban-shell.component';

describe('KanbanShellComponent', () => {
  let component: KanbanShellComponent;
  let fixture: ComponentFixture<KanbanShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
