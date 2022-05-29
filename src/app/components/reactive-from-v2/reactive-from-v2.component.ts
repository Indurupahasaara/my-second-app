import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';

@Component({
  selector: 'app-reactive-from-v2',
  templateUrl: './reactive-from-v2.component.html',
  styleUrls: ['./reactive-from-v2.component.css'],
})
export class ReactiveFromV2Component implements OnInit {
  studentForm!: FormGroup;

  submitted: boolean = false;
  isLoading:boolean = false;
  checked: boolean = false;

  get f() {
    return this.studentForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.studentForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')],
        ],
        dob: ['', [Validators.required]],
        contactNo: ['', [Validators.required]],
        address: ['', [Validators.required, Validators.maxLength(200)]],
        email: ['', [Validators.required, Validators.email]],
        // password: ['', [Validators.required, Validators.minLength(8)]],
        // conformPassword: ['', [Validators.required]],

        password: ['',[Validators.minLength(8)]],
        conformPassword: ['']
        // checkbox:['',[Validators.required]]
      },
      {
        validators: MustMatch('password', 'conformPassword'),
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    // let email :string = this.studentForm.value.email;

    


    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      console.log(this.studentForm.controls);      
      
      //add values to form
      this.f.address.setValue('Galle');

      //pass data into service
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      },3000);
    }

    //add values into form controls
    // this.studentForm.patchValue({
    //   firstName: 'Suranja',
    //   lastName: 'Liyanage',
    //   dob : '2013.02.15',
    //   contactNo:'01236587'
    // });

    // if(this.studentForm.invalid){
    //   alert('Invalid');
    // }
  }

  clearForm(): void {
    this.submitted = false;
    this.studentForm.reset();
  }

  setAsPasswordReq(){
    if(this.studentForm.value.email.includes('gmail.com')){
      //add validations to controls
      // this.studentForm.get('password')?.setValidators(Validators.required);
      // this.studentForm.get('conformPassword')?.setValidators(Validators.required);

      this.f.password.setValidators(Validators.required);
      this.f.conformPassword.setValidators(Validators.required);
    }
  }

  
}
