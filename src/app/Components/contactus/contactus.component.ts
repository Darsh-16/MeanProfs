import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { registerservices} from '../../Shared/Model/Services/register.services';
import {Icontactus} from '../../Shared/Model/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
public contactdata:FormGroup;
public submitted:boolean=false;
  constructor(private fb:FormBuilder,private contactusservies:registerservices) { }

  ngOnInit() {
    this.contactdata=this.fb.group({
      Firstname :['', Validators.required],
      Lastname :['', Validators.required],
      Email :['', Validators.required],
      Phone :['', Validators.required],
      Message :['', Validators.required]
    });
  }

onSubmit(data:Icontactus){
  this.submitted=true;
  if (!this.contactdata.valid){return;}
  this.contactusservies.contactus(data).subscribe((data)=>{
    console.log(data);
  });
  console.log(data);
  alert('we received yours query');
  location.reload();
}

}
