import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';
import {registerservices} from 'src/app/Shared/Model/Services/register.services';
import { Router} from '@angular/router';
import { Iadminregister} from '../../Shared/Model/aregisteration';
import { Ialogin} from '../../Shared/Model/adminlogin'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  presentUser = JSON.parse(localStorage.getItem('acurrentUser'));
  acurrentUser:Ialogin;
  public validateError:string;
  public adminregister:FormGroup;
  public adminlogin:FormGroup;
  public submitted:boolean=false;


  constructor(
    private register:FormBuilder,
    private registerservice:registerservices,
    private al:FormBuilder,
    private adminServices:registerservices,
    private router:Router

  ) { }

  ngOnInit() {
    this.adminregister = this.register.group({
      AFirstname:['',[Validators.required,Validators.minLength(3)]],
         ALastname:['',[Validators.required,Validators.minLength(4)]],
         Adminlogin:this.register.group({
           AdminEmail:['',[Validators.required,Validators.email]],
           AdminPassword:['',Validators.required]
         }) 
     })


     this.adminlogin = this.al.group({
       'Adminlogin' : this.al.group({
         'AdminEmail':['',[Validators.required]],
         'AdminPassword':['',[Validators.required]]
       })
     })

      this.adminServices
      .acurrentUser.subscribe(x =>{
        this.acurrentUser = x;
      });
      console.log(this.acurrentUser);
      alert(JSON.stringify(this.acurrentUser));


  }

  // Logout(){
  //   this.adminServices.userLogout();
  // }

onSubmit(data:Iadminregister){
  this.submitted = true;
  if(!this.adminregister.valid){return;}
  console.log(data);
  this.registerservice.addadmin(data).subscribe(data =>{
    alert('Registered Successfully');
    console.log(data);
  })
}



Save(data:Ialogin){
  this.submitted = true;
  if(!this.adminlogin.valid){return;}
  console.log(data);
  this.registerservice.alogin(data).subscribe(data =>{
    if(data.AdminIdentity){
      alert('Login SuccesFull Admin, Welcome ');
      this.router.navigateByUrl('/admin');
      console.log(data);
    }else{
      console.log(data.Error);
      this.validateError = data.Error;
    }
  })
}

}
