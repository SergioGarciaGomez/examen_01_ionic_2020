import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goEx1() {
    this.router.navigateByUrl('ex08sgg1')
  }

  goEx2() {
    this.router.navigateByUrl('ex08sgg2')
  }

  goEx3() {
    this.router.navigateByUrl('ex08sgg3')
  }

  goEx4() {
    this.router.navigateByUrl('ex08sgg4')
  }

}
