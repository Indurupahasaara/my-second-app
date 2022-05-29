import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  submitted: boolean = false;
  isLoading:boolean = false;
  checked: boolean = false;

  invoiceForm!: FormGroup;
  get f() { return this.invoiceForm.controls; }

  get lineItems(): FormArray {
    return this.invoiceForm.get('lineItems') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.addNewLine();
  }

  initForm(): void {
    this.invoiceForm = this.fb.group({
      invoiceNo: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      customerName: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: [''],
      remarks: [''],
      grossAmmount: ['', [Validators.required]],
      discount: [0, [Validators.required,Validators.min(0), Validators.max(100)]],
      netAmmount: ['', [Validators.required]],
      lineItems: this.fb.array([])
    });
  }

  onSubmit() {
   this.submitted=true;
   if(this.invoiceForm.valid){
     console.log(this.invoiceForm.value);
   }
  }

  addNewLine() {
    this.lineItems.push(this.initLineItem());
  }

  initLineItem(): FormGroup {
    return this.fb.group({
      itemName: ['', [Validators.required]],
      unitPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      total: ['', [Validators.required]],
    })
  }

  deleteLine(index: number): void {

    if (this.lineItems.length > 1) {
      this.lineItems.removeAt(index);
    } else {
      alert('At lest One linne Item is shouls be');
    }
  }


  //#region calculate

  onUnitPriceQuantityChanged(i: number): void {
    const unitPrice: number = Number(this.lineItems.controls[i].get('unitPrice')?.value);
    const quantity: number = Number(this.lineItems.controls[i].get('quantity')?.value);
    this.lineItems.controls[i].get('total')?.setValue(unitPrice * quantity);
    this.calculateNetAmount();

  }

  calculateNetAmount(): void {

    let grossAmmount:number = 0;
    let netAmmount:number = 0;
    const discount :number= Number(this.invoiceForm.get('discount')?.value);

    for (const formRow of this.lineItems.controls) {
      grossAmmount += Number(formRow.get('total')?.value);
    }

    
    netAmmount = grossAmmount-((grossAmmount*discount)/100);

    this.invoiceForm.get('grossAmmount')?.setValue(grossAmmount);
    this.invoiceForm.get('netAmmount')?.setValue(netAmmount);
  }

  //#endregion
  onclear(){
    this.invoiceForm.reset;
  }
}
