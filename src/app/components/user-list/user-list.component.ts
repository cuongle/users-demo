import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user";
import {Observable} from "rxjs";
import { GlobalStore } from 'src/app/core/services/global-store';

@Component({
  selector: 'ud-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: GlobalStore) {
    this.users$ = store.users$;
  }

  ngOnInit(): void {
  }

}
