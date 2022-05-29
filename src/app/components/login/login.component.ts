import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    // console.log(`Username : ${this.userName}`);
    if (this.userName == 'prabath' && this.password == '1234') {
      // alert('Login sucessfully!');
      localStorage.setItem('userId', '1');
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/']);
    } else {
      alert('Username or Password is incorrect!');
    }
  }
}
