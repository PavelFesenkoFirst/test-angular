import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default title';

  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
