import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'appuser-component',
  templateUrl: './appuser.component.html'
})
export class AppUserComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:11807/api/user/getusers').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
