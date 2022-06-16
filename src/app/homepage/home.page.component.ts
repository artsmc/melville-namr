import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import * as anime from 'animejs';
import * as AOS from 'aos';

@Component({
  selector: 'app-render-homepage',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    AOS.init();
  }
  ngOnDestroy(): void {}
}
