import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserResponse} from './core/models/user';
import {UserStore} from "./core/services/user-store";
import {UserService} from "./core/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-demo';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.loadUsers();
  }
}
