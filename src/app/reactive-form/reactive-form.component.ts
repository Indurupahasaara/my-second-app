import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studentModel:Student = new Student();
  @ViewChild('f') form:any;
  checked: boolean = true;

  languages:string[] =['Sinhala','Tamil','English','French','German'];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    
    if(this.form.invalid){
      alert('Please enter valid data');
      return;
    }

    //pass the form object to backend via the service
    alert('Success');
    this.form.reset();
    this.studentModel.language = '';
    
  }

}
