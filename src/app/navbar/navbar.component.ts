import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef | any;

  sticky = false;
  elementPosition: any;

  darkButton = document.getElementById('dark');
  lightButton = document.getElementById('light');
  body = document.body;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeTheme(){
    if(this.body.classList.value==='light'){
      this.body.classList.replace('light', 'dark');
    }else{
      this.body.classList.replace('dark', 'light');
    }

    }
}
