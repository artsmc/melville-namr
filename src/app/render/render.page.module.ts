import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RenderComponent } from './render.page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'output',
        component: RenderComponent,
      },
    ]),
  ],
  declarations: [RenderComponent],
  bootstrap: [RenderComponent],
})
export class RenderPageModule {}
