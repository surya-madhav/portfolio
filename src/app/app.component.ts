import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public breakPointObserve: BreakpointObserver){
  }
  ngOnInit(): void {
    // this.breakPointObserve.observe([Breakpoints.Small ,Breakpoints.HandsetPortrait]).subscribe((state: BreakpointState)=>{
    //   if(state.matches){
    //     console.log(state.breakpoints ,"🎇🎆🎆")
    //   }
    // })
  }

  
}
