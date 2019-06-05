import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/services/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kanban-shell',
  templateUrl: './kanban-shell.component.html',
  styleUrls: ['./kanban-shell.component.scss']
})
export class KanbanShellComponent implements OnInit {

  welcomeMsg: string;

  constructor(private demoSvc: DemoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( (data: { msg: string}) => {
      this.welcomeMsg = data.msg;
    } );
  }

}
