import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ud-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.css']
})
export class ViewSwitchComponent implements OnInit {
  @Input() isList!: boolean;
  @Output() change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isList = !this.isList;
    this.change.next(this.isList);
  }
}
