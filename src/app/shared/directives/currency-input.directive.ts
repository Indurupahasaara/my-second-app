import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCurrencyInput]',
})
export class CurrencyInputDirective implements OnInit {
  @Input() currencyCode: string = '$';

  element!: HTMLInputElement;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
    this.element.style.textAlign = 'right';
    this.element.style.color = 'blue';
  }

  //remove non-digit charactors
  @HostListener('keyup', ['$event.target.value'])
  keyup(value: string) {
    this.element.value = value.replace(/\D/g, '');
  }

  @HostListener('blur', ['$event.target.value'])
  blur(value: string) {
    if (value !== null || value != '') {
      //add thousand seperators
      value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.element.value = `${this.currencyCode}${value}`;
    }
  }

  @HostListener('focus', ['$event.target.value'])
  focus(value: string) {
    value = value.replace('$', '');
    this.element.value = value.replace(',', '');
  }
}
