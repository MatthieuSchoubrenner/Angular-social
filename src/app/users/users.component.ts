import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserObject} from '../interfaces/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users?: Array<UserObject>;

  constructor(public userService: UserService) {
    // fetch all users
    this.userService.getAllUser().subscribe((data) => (this.users = data));
  }

  ngOnInit(): void {
  }
}
