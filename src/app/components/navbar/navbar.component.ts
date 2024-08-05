import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin = false;
  user = this.login.getUser();

  constructor(public login:LoginService,private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.isLoggedin=this.login.isLoggedin();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedin=this.login.isLoggedin();
    //  console.log(this.login.getUser());

      //this.user = this.login.getUser();
      //window.location.reload();
    })
  }


  public logout(){
    this.login.logout();
     window.location.reload();
     
    // this.login.loginStatusSubject.next(false);
    //this.router.navigate(['login']);
  }
}
