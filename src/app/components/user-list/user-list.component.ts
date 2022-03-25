import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user";

@Component({
  selector: 'ud-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users!: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
