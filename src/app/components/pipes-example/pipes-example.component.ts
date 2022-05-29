import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  myString: string = 'Prabath Udayanga';
  myString2: string = 'Hello Angular';

  amount: number = 45756.256;
  currentDate = new Date();
  total: number = 56.3254454545;
  perVal: number = 0.12356;
  size: number = 36500;
  value: number = 12;

  myObject: any[] = [
    {
      id: 1,
      name: 'Abc',
    },
    {
      id: 2,
      name: 'Abc2',
    },
    {
      id: 3,
      name: 'Abc3ss',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  reverseString(value: string): string {
    return value.split('').reverse().join('');
  }
}
