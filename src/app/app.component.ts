import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {combineLatest, filter, map, Observable, Subscription, switchMap} from "rxjs";
import {User} from "./core/models/user";
import {GlobalStore} from "./core/services/global-store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'users-demo';
  users$!: Observable<User[]>;

  constructor(private userService: UserService, private globalStore: GlobalStore) {
    this.userService.loadUsers();
  }

  ngOnInit(): void {
    this.users$ = this.globalStore.searchOptions$.pipe(
      switchMap(searchOptions => {
        return this.globalStore.users$.pipe(
          map(users => {
            let finalUsers = users;
            const searchText = searchOptions.searchText;

            if (searchText !== undefined) {
              finalUsers = finalUsers.filter(user => {
                const fullName = (user.name.first + user.name.last).toLowerCase();
                return fullName.includes(searchText.toLowerCase());
              });
            }

            const gender = searchOptions.gender;
            if (gender !== undefined) {
              finalUsers = finalUsers.filter(user => {
                return user.gender === gender.toLowerCase();
              });
            }

            return finalUsers;
          })
        )
      })
    )
  }

  ngOnDestroy() {
  }

  onSearchChanged($event: string) {
    this.globalStore.emitSearchText($event);
  }

  onGenderChanged($event: any) {
    console.log($event);
    this.globalStore.emitGender($event);
  }
}
