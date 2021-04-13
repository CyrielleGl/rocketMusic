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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPresentation(frag: string): void {
    this.router.navigate(['/presentation'], {fragment: frag})
  }

  ngAfterViewInit(): any {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(): void {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}