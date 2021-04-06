import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  hamburger_opened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.hamburger_opened = !this.hamburger_opened;
    console.log("toggled")
  }

}
