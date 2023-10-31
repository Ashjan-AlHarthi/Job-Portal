import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

export interface User {
  userName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visible: boolean = false;
  signin: boolean = false;

  items: MenuItem[] | undefined;


  showDialog() {
    this.visible = true;
  }

  showDialog2() {
    this.signin = true;
  }

  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  }

  loginpObj: any = {
    userName: '',
    password: '',
  }

  constructor( private router : Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }

    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
      }
    ]
  }

  onSignup() {

    const newUser: User = {
      userName: this.signupObj.userName,
      email: this.signupObj.email,
      password: this.signupObj.password,
    };
  
    this.signupUsers.push(newUser);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));

    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    }

    alert('Registered Successfully');
    
    this.router.navigate(['/user']);
  }

  onLogin() {


    const isUserExist = this.signupUsers.find((user: User) => {
      return user.userName === this.loginpObj.userName && user.password === this.loginpObj.password;
    });
    
    if (isUserExist != undefined) {

     this.router.navigate(['/user']);
     
    }

    else {
      alert('Invalid username/password');
    }
  }


}
