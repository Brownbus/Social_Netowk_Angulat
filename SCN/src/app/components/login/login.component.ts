import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthenticationService) { }
  login({username, password}):void{
  if(username && password){
    this.authSvc.authenticate(username, password).subscribe((resp):void=>{
      console.log(resp)
    })
  }else{
    alert("Please Fill Out Both Fields")
  }
  }

  ngOnInit() {
  }

}
