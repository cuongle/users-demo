import { Component, Input, OnInit } from '@angular/core';
import {User} from "../../core/models/user";

@Component({
  selector: 'ud-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  isFemale(): boolean {
    return this.user.gender === 'female';
  }
}
