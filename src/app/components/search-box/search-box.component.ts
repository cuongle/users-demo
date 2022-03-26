import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ud-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<string>();
  text: string | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onChanged($event: string) {
    this.searchChanged.emit($event);
  }
}
