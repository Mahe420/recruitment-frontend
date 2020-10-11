import { Component, OnInit } from '@angular/core';
import tech from '../Tech.json';
@Component({
  selector: 'app-techapps',
  templateUrl: './techapps.component.html',
  styleUrls: ['./techapps.component.scss']
})
export class TechappsComponent implements OnInit {
  list = tech;
  constructor() { }

  ngOnInit(): void {
  }

  handleEvent(event){
    if(event.action==='done'){
    console.log(event);
  }
}
}
