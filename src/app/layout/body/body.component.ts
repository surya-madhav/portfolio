import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  // @HostBinding('style.display') public display: string = 'block';
  constructor() { }

  ngOnInit(): void {
  }

}
