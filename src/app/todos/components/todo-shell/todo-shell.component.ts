import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/services/demo.service';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.scss']
})
export class TodoShellComponent implements OnInit {

  constructor(private demoSvc: DemoService) { }

  ngOnInit() {
  }

}
