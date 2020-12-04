import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Iproduct } from '../../Shared/Model/product';
import { registerservices} from '../../Shared/Model/Services/register.services';
import { IAlert} from '../../Shared/Model/IAlert';


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  defaultQuantity:number=1;
  productAddedTocart:Iproduct[];
  allTotal:number;
  deliveryForm:FormGroup;

  constructor(private registerservice:registerservices,private fb: FormBuilder) { }

  ngOnInit() {
    this.productAddedTocart=this.registerservice.getProductFromCart();
    for (let i in this.productAddedTocart){
      this.productAddedTocart[i].Quantity=1;
    }
    this.registerservice.removeAllProductFromCart();
    this.registerservice.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);

    this.deliveryForm = this.fb.group({
      UserName:['',[Validators.required]],
      DeliveryAddress:['',[Validators.required]],
      Phone:['',[Validators.required]],
      Email:['',[Validators.required]],
      Message:['',[Validators.required]],
      Cod:['',[Validators.required]],
      Amount:['',[Validators.required]]

    });

    this.deliveryForm.controls['Amount'].setValue(this.allTotal);


  }
calculteAllTotal(allItems:Iproduct[])
{
  let total=0;
  for (let i in allItems) {
    total = total+(allItems[i].Quantity *allItems[i].TotalPrice);
  }
  this.allTotal=total;
}

onAddQuantity(product:Iproduct){
  this.productAddedTocart=this.registerservice.getProductFromCart();
  this.productAddedTocart.find(p=>p._id==product._id).Quantity=product.Quantity+1;
  this.registerservice.removeAllProductFromCart();
  this.registerservice.addProductToCart(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);
}

onRemoveQuantity(product:Iproduct){
  this.productAddedTocart=this.registerservice.getProductFromCart();
  if (this.productAddedTocart.find(p=>p._id==product._id).Quantity!=0){
  this.productAddedTocart.find(p=>p._id==product._id).Quantity = product.Quantity-1;
  }
  else{
    this.productAddedTocart.splice(product.Quantity,1);

  }
  this.registerservice.removeAllProductFromCart();
  this.registerservice.addProductToCart(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);
}

}
