import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-render-page',
  templateUrl: './render.page.component.html',
  styleUrls: ['./render.page.component.scss'],
})
export class RenderComponent {
  name = 'Angular ' + VERSION.major;
}
