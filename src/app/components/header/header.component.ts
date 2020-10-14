import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('home') home;
  @ViewChild('groups') groups;
  @ViewChild('login') login;

  private routeUrl: string;

  constructor(private router: Router,
    private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routerChangeMethod(event.url);
      }
    })
  }

  routerChangeMethod(url) {
    this.routeUrl = url;

    if (this.routeUrl.match('/home') || this.routeUrl == '/') {
      this.home.nativeElement.className += " active";
      this.groups.nativeElement.className = this.groups.nativeElement.className.replace("active", "");
      this.login.nativeElement.className = this.login.nativeElement.className.replace("active", "");
    } else if (this.routeUrl.match('/login')) {
      this.login.nativeElement.className += " active";
      this.groups.nativeElement.className = this.groups.nativeElement.className.replace("active", "");
      this.home.nativeElement.className = this.home.nativeElement.className.replace("active", "");
    } else if (this.routeUrl.match('/groups')) {
      this.groups.nativeElement.className += " active";
      this.login.nativeElement.className = this.login.nativeElement.className.replace("active", "");
      this.home.nativeElement.className = this.home.nativeElement.className.replace("active", "");
    }

  }

  public navigateTo(page: string) {
    page = '/' + page;
    this.router.navigate([page]);
  }

}
