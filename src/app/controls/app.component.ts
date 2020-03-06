import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[];

  constructor(
    private _usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this._usersService.getUsers();
  }
}
