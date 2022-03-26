import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {combineLatest, filter, map, Observable} from "rxjs";
import {User} from "./core/models/user";
import {GlobalStore} from "./core/services/global-store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-demo';
  users$!: Observable<User[]>;

  constructor(private userService: UserService, private userStore: GlobalStore) {
    this.userService.loadUsers();
  }

  ngOnInit(): void {
    this.users$ = this.userStore.users$;
  }

  onSearchChanged($event: string) {
    this.users$ = this.userStore.users$.pipe(
      map(users => users.filter(user => (user.name.first + user.name.last).toLowerCase().includes($event?.toLowerCase())))
    )
  }
}
