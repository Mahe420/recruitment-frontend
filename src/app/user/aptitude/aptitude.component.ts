import { Component, OnInit } from '@angular/core';
import app from '../App.json'
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
  list = app;
  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

  handleEvent(event) {
    if (event.action === 'done') {
      console.log(event);
    }
  }

}
