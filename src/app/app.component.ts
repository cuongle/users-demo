import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserResponse} from './core/models/user';
import {UserStore} from "./core/services/user-store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-demo';
  users: User[] = [];

  constructor(private http: HttpClient, private userStore: UserStore) {
  }

  ngOnInit(): void {
    const userApi = 'https://randomuser.me/api/?results=50';

    this.http.get<UserResponse>(userApi)
      .subscribe((response) => {
        this.userStore.emitUsers(response.results);
      });
  }
}
