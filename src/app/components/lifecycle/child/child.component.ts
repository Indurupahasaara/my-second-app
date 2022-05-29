import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
// OnChanges,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked
export class ChildComponent implements OnInit, OnDestroy {
  @Input() textFromParent!: string;

  count: number = 0;

  interval: any;

  constructor() {
    console.warn('child constructor called');
  }

  ngOnInit(): void {
    console.warn('child ngOnInIt called');
    this.interval = setInterval(() => {
      console.error(this.count++);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.warn('child ngOnDestroy called');
  }

  // ngDoCheck(): void {
  //   console.log('child ngDoCheck called');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   console.warn('child ngOnChange called');
  // }

  // ngAfterContentInit(): void {
  //   console.warn('child ngAfterContentInit called');
  // }

  // ngAfterViewChecked(): void {
  //   console.warn('child ngAfterViewChecked called');
  // }

  // ngAfterContentChecked(): void {
  //   console.warn('child ngAfterContentChecked called');
  // }

  // ngAfterViewInit(): void {
  //   console.warn('child ngAfterViewInit called');
  // }
}
