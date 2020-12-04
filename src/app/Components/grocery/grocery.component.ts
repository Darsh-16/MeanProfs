import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { registerservices} from '../../Shared/Model/Services/register.services'
import { Iproduct} from '../../Shared/Model/product';
import { productdisplay} from '../../Shared/Model/productdisplay';
import { SharedService} from '../../Shared/Model/Services/shared.services';
import { IAlert } from 'src/app/Shared/Model/IAlert';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
  providers:[registerservices]
})
export class GroceryComponent implements OnInit {
  public alerts:Array<IAlert>=[];
  cartItemCount:number = 0;
  @Output() cartEvent = new EventEmitter<number>();
  public globalResponse:any;
  yourByteArray:any;
  allProducts:productdisplay[];
  productAddedTocart:Iproduct[]; 
  searchTerm:string;
  public viewpro:Iproduct[];

  constructor(private registerservice:registerservices,
    private sharedService:SharedService) { }

  ngOnInit() {

    this.registerservice.getproduct().subscribe(data =>{
      this.viewpro=data;
      console.log(data);
    })
  }

  // onSubmit(data:Iregister){
  //   this.submitted = true;
  //   if(!this.userregister.valid){return;}
  //   console.log(data);
  //   this.registerservice.adduser(data).subscribe(data =>{
  //     alert('Registered Successfully');
  //     this.router.navigateByUrl('/home');
  //     console.log(data);
  //   })
  // }

  // OnAddCart(data:Iproduct){
  //   this.registerservice.addProductToCart(data).subscribe(data =>{
  //     alert('Product Added to Cart Successfully');
  //     console.log(data);
  //   })
  // }

 //this add to cart works perfectly but it stores data in a localstorage not in db 
 OnAddCart(product:Iproduct)
 {
   console.log(product);
   this.productAddedTocart=this.registerservice.getProductFromCart();
   if(this.productAddedTocart==null)
   {
     this.productAddedTocart=[];
     this.productAddedTocart.push(product);
     this.registerservice.addProductToCart(this.productAddedTocart);
     this.alerts.push({
       id:1,
       type:'success',
       message:'Product added to cart.'
     });
     setTimeout(()=>{
       this.closeAlert(this.alerts);
     },6000);
   }
   else
   {
     let tempProduct=this.productAddedTocart.find(p=>p._id==product._id);
     if(tempProduct==null)
     {
       this.productAddedTocart.push(product);
       this.registerservice.addProductToCart(this.productAddedTocart);
       this.alerts.push({
         id:1,
         type:'success',
         message:'Product added to cart.'
       });
       setTimeout(()=>{
         this.closeAlert(this.alerts);
       },6000);
     }
     else
     {
       this.alerts.push({
         id:2,
         type:'warning',
         message:'Product already exist in cart.'
       });
       setTimeout(()=>{
         this.closeAlert(this.alerts);
       },6000);
     }
   }

   this.cartItemCount=this.productAddedTocart.length;
   this.sharedService.updateCartCount(this.cartItemCount);
 } 
public closeAlert(alert:any){
  const index:number = this.alerts.indexOf(alert);
  this.alerts.splice(index,1);
}

}
