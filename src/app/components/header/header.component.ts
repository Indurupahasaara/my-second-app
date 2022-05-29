import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('userName') != '' &&
      localStorage.getItem('userName') != null
    ) {
      this.userName = localStorage.getItem('userName') ?? '';
    }
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
