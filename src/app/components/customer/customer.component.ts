import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, last, Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  [x: string]: any;
 loading : BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
 loading$:Observable<boolean>;
 
  customerForm!: FormGroup
  customerList: any[] = [];
  isUpdate: boolean = false;
  selectedId: string;


  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.loading$=this.loading.asObservable();
    this.initForm();
    this.getList();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSaveOrUpdate(): void {

    if (this.customerForm.invalid) {
      alert('please fill the fields')
      return;
    }
this.loading.next(true);

    if (this.isUpdate) {
      //update record
      this.customerService.update(this.customerForm.value, this.selectedId).subscribe(res => {
        this.getList();
        // alert('Record has been updated')
        this.toastr.success('Message', 'Record Has been Updated');
        this.loading.next(false);
      });
    } else {
      //save
      this.customerService.create(this.customerForm.value).subscribe(res => {
        this.customerForm.reset();
        this.getList();
        this.loading.next(false);
        this.toastr.success('Message', 'Record Has been Save');
      }, error => {
        this.toastr.error('Message', 'Record Has Error');
      }, () => {
        console.log('Completed');
      });
    }
  }

  getList(): void {
    this.customerService.getAll().subscribe(res => {
      this.customerList = res;
    });
  }

  onUpdate(customer: any): void {
    this.isUpdate = true;
    this.selectedId = customer.id;

    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      dob: customer.dob,
      contactNo: customer.contactNo,
      address: customer.address
    });

  }


  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are You want to delete this record')
    if (isConfirm) {
     this.customerService.delete(id).subscribe(res =>{
       console.log(res);
       this.getList();
       
     });
    }
  }


  onReset(): void {
    this.isUpdate = false;
    this.selectedId = '';
  }


}