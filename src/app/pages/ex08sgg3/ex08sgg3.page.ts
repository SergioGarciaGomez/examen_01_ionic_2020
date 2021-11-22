import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ex08sgg3',
  templateUrl: './ex08sgg3.page.html',
  styleUrls: ['./ex08sgg3.page.scss'],
})
export class Ex08sgg3Page implements OnInit {

  minRange: number = 18;
  maxRange: number = 100;
  gender: number = 0;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  mostrar(){
    console.log('Min: '+ this.minRange + ', Max: ' + this.maxRange);
  }

  getAll(){
    this.gender = 0;
  }

  getMan(){
    this.gender = 1;
  }

  getWoman(){
    this.gender = 2;
  }
}