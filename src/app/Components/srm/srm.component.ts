import { Component, OnInit } from '@angular/core';
import { registerservices } from 'src/app/Shared/Model/Services/register.services';
import { Validators,FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Iproduct } from '../../Shared/Model/product';
import { Router, ActivatedRoute} from '@angular/router';
import { Iregister } from 'src/app/Shared/Model/Registeration';

@Component({
  selector: 'app-srm',
  templateUrl: './srm.component.html',
  styleUrls: ['./srm.component.css']
})
export class SrmComponent implements OnInit {
  public viewuser:Iregister[];


  constructor(    private registerservice:registerservices
    ) {
    
   }

  ngOnInit() {

    this.registerservice.getuser().subscribe(data =>{
      this.viewuser=data;
    console.log(data);
  //  console.log(this.viewuser.userlogin.UserEmail)
    });
  }

}
