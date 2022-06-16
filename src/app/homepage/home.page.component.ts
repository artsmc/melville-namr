import { Component, VERSION } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-render-homepage',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomepageComponent {
  name = 'Angular ' + VERSION.major;
}
