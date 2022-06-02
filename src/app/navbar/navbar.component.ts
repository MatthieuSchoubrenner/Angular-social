import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtTokenService} from '../jwt-token.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService,
              private jwt: JwtTokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.jwt.removeToken();
    this.userService.setIsConnected(true);
    this.router.navigate(['/']);
  }

}
