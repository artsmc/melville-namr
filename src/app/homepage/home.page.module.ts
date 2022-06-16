import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './home.page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomepageComponent,
      },
    ]),
  ],
  declarations: [HomepageComponent],
  bootstrap: [HomepageComponent],
})
export class HomepageModule {}
