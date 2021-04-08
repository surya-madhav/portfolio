import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  hamburger_opened: boolean = false;
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }
  toggle(){
    this.hamburger_opened = !this.hamburger_opened;
    console.log("toggled")
  }

}
