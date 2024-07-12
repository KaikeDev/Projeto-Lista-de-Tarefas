import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './modules/to-do-list/pages/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],

  template:
   `
   <router-outlet />


  `,
})
export class AppComponent {

}
