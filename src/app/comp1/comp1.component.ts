import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() {
  this.stroki = ["If you think your teacher is tough, wait till you get a boss", "Life is not fair — get used to it!", "Success is a lousy teacher. It seduces smart people into thinking they can’t lose","Be nice to nerds. Chances are you’ll end up working for one"];
 }
stroki: string[];
  ngOnInit(): void {
  }

}


