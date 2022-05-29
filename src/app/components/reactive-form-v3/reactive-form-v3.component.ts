import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';

@Component({
  selector: 'app-reactive-form-v3',
  templateUrl: './reactive-form-v3.component.html',
  styleUrls: ['./reactive-form-v3.component.css']
})
export class ReactiveFormV3Component implements OnInit {

  regForm!: FormGroup;

  jobRoles:string[] =['Front-End Developer','Back-End Developer','Full-Stack Developer','Mobile App Developer','Project Manager','Tech Lead'];
  countries:string[]=['USA','New Zealand','India','China','Japan','Sri Lanka','Swizterland','England'];
  qualifications:string[]=['A/L','Diploma','Higher National Diploma','Degree','Masters'];

  get f() {
    return this.regForm.controls;
  }

  submitted: boolean = false;
  isLoading:boolean = false;
  checked: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()

  }

  initForm(): void {
    this.regForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [Validators.required,Validators.pattern('^[A-Za-z_-]{2,20}$')],
        ],
        lastName: [
          '',
          [Validators.required,Validators.pattern('^[A-Za-z_-]{2,20}$')],
        ],
        dob:[
          '',
          [Validators.required]
        ],
        gender:[
          '',
          [Validators.required]
        ],
        country:[
          '',
          [Validators.required]
        ],
        
        town:[
          '',
          [Validators.required]
        ],
        city:[
          '',
          [Validators.required]
        ],
        postal:[
          '',
          [Validators.required]
        ],
        mobileNo:[
          '',
          [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]
        ],
        homeNo:[
          '',
          [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]
        ],
        job:[
          '',
          [Validators.required]
        ],
        email:[
          '',
          [Validators.required,Validators.email]
        ],
        qualification:[
          '',
          [Validators.required]
        ],
        interests:[
          '',
          [Validators.required]
        ],
        username:[
          '',
          [Validators.required,Validators.maxLength(10)]
        ],
        password:[
          '',
          [Validators.required,Validators.minLength(5)]
        ],
        conformPassword:[
          '',
          [Validators.required]
        ],
        about:[
          '',
          [Validators.required,Validators.maxLength(200)]
        ],
        accept:[false,Validators.required]
       
      },
      
      {
        validators: MustMatch('password', 'conformPassword'),
      }
      
    );
  }

  onSubmit(){
    this.submitted = true;
    if (this.regForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      },3000);
      console.log(this.regForm.value);
      // console.log(this.regForm.controls);
    }
  }

  changeValue() {
    
    // this.married = new FormControl(!this.married.value);
    this.regForm.value.accept = !this.regForm.value.accept;
    console.log(this.regForm.value.accept);

}
clearForm(): void {
  this.submitted = false;
  this.regForm.reset();
  // this.changeValue();
}

}
