import { Input,Component, OnInit } from '@angular/core';
import {Validators,FormGroup, FormBuilder} from '@angular/forms';
import { registerservices } from 'src/app/Shared/Model/Services/register.services';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/Shared/Model/userlogin';
import { Iregister} from '../../Shared/Model/Registeration';
import { SharedService } from '../../Shared/Model/Services/shared.services'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'] 
})
 export class NavigationComponent implements OnInit {
   presentUser = JSON.parse(localStorage.getItem('currentUser'));
   currentUser:Ilogin;
   public validateError:string;
   public userregister:FormGroup;
   public login:FormGroup;
   public submitted:boolean=false;
   public loggedinuser;
   public userName;
  cartItemCount:number=0;
  approvalText:string="";

@Input()
public alerts:Array<IAlert>=[];

message = "";
public globalResponse:any;

   constructor(private signup:FormBuilder,
    private registerservice:registerservices,
    private signin:FormBuilder ,
     private router:Router,
     private userServices:registerservices,
     private sharedService:SharedService) { }
 
  //  userregister:FormGroup=this.signup.group({
  //    firstname:['',Validators.required],
  //    lastname:['',Validators.required],
  //    userlogin:this.signup.group({
  //      userEmail:['',Validators.required],
  //      userPassword:['',Validators.required]
  //    }) 
// });
 



 
//  login:FormGroup=this.signin.group({
//  'userlogin':this.signin.group({
//    'userEmail':['',Validators.required],
//    'userPassword':['',Validators.required]
//  })
//  });
 



//  Save(data : Ilogin){
  
//    this.registerservice.login(data).subscribe(data=>{
//      alert('Login SuccesFull');
//    console.log(data);
//    })
//  } 


   ngOnInit() {
this.sharedService.currentMessage.subscribe(msg =>this.cartItemCount = msg);

     this.userregister = this.signup.group({
      Firstname:['',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
         Lastname:['',[Validators.required,Validators.minLength(4)]],
         userlogin:this.signup.group({
           UserEmail:['',Validators.required],
           UserPassword:['',Validators.required]
         }) 
     })
 
this.login=this.signin.group({
      'userlogin':this.signin.group({
        'UserEmail':['',Validators.required],
        'UserPassword':['',Validators.required]
      })
      })

    this.userServices
    .currentUser.subscribe(x =>{
      this.currentUser = x;
    });
    console.log(this.currentUser);
    alert(JSON.stringify(this.currentUser));
 
     let users = JSON.parse(localStorage.getItem('currentUser'));
     console.log(users);

    // let userloggedin = localStorage.getItem('currentuser');
    // console.log(userloggedin);

   }

  Logout(){
    this.userServices.userLogout();
    }


    onSubmit(data:Iregister){
     this.submitted = true;
     if(!this.userregister.valid){return;}
     console.log(data);
     this.registerservice.adduser(data).subscribe(data =>{
       alert('Registered Successfully');
       this.router.navigateByUrl('/home');
       console.log(data);
     })
   }

   
 Save(data : Ilogin){
   this.submitted = true;
   if(!this.login.valid){return;}
   console.log(data);
   this.registerservice.login(data).subscribe(data => {
    
  if(data.UserIdentity){ 
    alert('Login SuccesFull');
    this.router.navigateByUrl('/home');
  console.log(data);
} else {
  console.log(data.Error);
  this.validateError = data.Error;
}

  })
} 
 }


 
//  onSubmit(data){
//    this.registerservice.adduser(data).subscribe(data=>{
//      alert('Registered SuccessFully');
//              console.log(data);
            
//  });
 //};

 export interface IAlert{
   id:number;
   type:string;
   message:string;
 }