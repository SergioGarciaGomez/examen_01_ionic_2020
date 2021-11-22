import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ex08sgg2',
  templateUrl: './ex08sgg2.page.html',
  styleUrls: ['./ex08sgg2.page.scss'],
})
export class Ex08sgg2Page implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}