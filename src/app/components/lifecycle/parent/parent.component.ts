import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  isChild: boolean = false;
  someTexts: string = '';

  constructor() {
    console.error('parent constructor called');
  }

  ngOnInit(): void {
    console.error('parent ngOnInIt called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
