import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://js-starter-kit-api.herokuapp.com/users';

  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Promise<User[]> {
    return this._http
      .get<User[]>(this.url)
      .toPromise();
  }
}
