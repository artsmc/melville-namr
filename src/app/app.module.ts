import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { HomepageModule } from './homepage/home.page.module';
import { RenderPageModule } from './render/render.page.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomepageModule,
    RenderPageModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
