import { Component } from '@angular/core';
import { ConnectivityService } from './core/services/connectivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dw';

  constructor(public connect: ConnectivityService) {}

}
