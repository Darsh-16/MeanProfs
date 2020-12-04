import { Component, OnInit ,OnDestroy} from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
import {registerservices} from '../../Shared/Model/Services/register.services';
import { Iproduct} from '../../Shared/Model/product'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit,OnDestroy {
 
    id: string;
   quickview: Iproduct;
   quickviewSub$: Subscription;

 constructor(private registerservice:registerservices,
  private route:ActivatedRoute) { }

  ngOnInit() {
 
     this.id = this.route.snapshot.paramMap.get("id");
     console.log(this.id);
     this.quickviewSub$ = this.registerservice
     .getproductid(this.id)
     .subscribe(quickview=>{
       this.quickview = quickview;
       console.log(this.quickview);
     });

  }

  ngOnDestroy():void{
    this.quickviewSub$.unsubscribe();
  }

  // OnAddCart(data:Iproduct){
  //   this.registerservice.addcartitem(data).subscribe(data =>{
  //     alert('Product Added to Cart Successfully');
  //     console.log(data);
  //   })
  // }



}



//  public quickview:Iproduct[];
  //  public productid:string;
  //  public model:Iproduct[];
    //  this.route.params.subscribe(data=>{
    //    this.productid=data["_id"]
    //  });
    //  this.registerservice.getproductid().subscribe(data=>{
    //    this.model=data.filter(val=>val._id==(this.productid));
    //    console.log(this.model);
    //    return this.model;
    //  });