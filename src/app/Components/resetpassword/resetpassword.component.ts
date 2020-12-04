import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {registerservices} from '../../Shared/Model/Services/register.services';
import {Imailerfp} from '../../Shared/Model/mailerfp';
import {Ilogin} from '../../Shared/Model/userlogin';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
public mailerdata:FormGroup;
// public submitted:boolean=false;
  constructor(private fb:FormBuilder,private mailerservices:registerservices) { }

  ngOnInit() {
    this.mailerdata=this.fb.group({
      // UserEmail:['',Validators.required],
        UserEmail:['',Validators.required]
 
    });    
  }

onSubmit(data:Ilogin){
  // this.submitted=true;
  if(!this.mailerdata.valid){return;}
  this.mailerservices.mailer(data).subscribe((data)=>{
    console.log(data);
  });
  console.log(data);
  alert('The Password Reset Link is sent to your valid EmailId');
  // location.reload();
}

}
