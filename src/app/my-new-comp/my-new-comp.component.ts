import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-new-comp',
  templateUrl: './my-new-comp.component.html',
  styleUrls: ['./my-new-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyNewCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
