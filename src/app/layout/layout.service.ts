import { Injectable } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sideNav: MatSidenav;
  private media: MediaMatcher;

  constructor(media: MediaMatcher) {
    this.media = media;  
    
  }
  setSidenav(sNav: MatSidenav) {
    this.sideNav = sNav;
  }
  public openSidenav() { this.sideNav.open() }
  public closeSidenav() { this.sideNav.close() }
  public toggleSidenav() { this.sideNav.toggle() }
  public getMediaQueryForMobile(): MediaQueryList{
    return this.media.matchMedia('(max-width ,600px)')
  }
}
