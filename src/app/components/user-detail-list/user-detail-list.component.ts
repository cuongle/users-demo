import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user";

@Component({
  selector: 'ud-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent implements OnInit {
  @Input() users!: User[];

  constructor() { }

  ngOnInit(): void {
  }

  isFemale(user: User): boolean {
    return user.gender === 'female';
  }

}
