import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ud-gender-toggle',
  templateUrl: './gender-toggle.component.html',
  styleUrls: ['./gender-toggle.component.css']
})
export class GenderToggleComponent implements OnInit {
  status: string | undefined = undefined;
  @Output() change = new EventEmitter<string | undefined>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.status = undefined;
    this.change.emit(this.status);
  }

  toggleMale(): void {
    this.status = 'male';
    this.change.emit(this.status);
  }

  toggleFemale(): void {
    this.status = 'female';
    this.change.emit(this.status);
  }
}
