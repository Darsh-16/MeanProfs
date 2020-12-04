import { Component, OnInit, Input } from '@angular/core';
import { registerservices } from 'src/app/Shared/Model/Services/register.services';
import { Validators,FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Iproduct } from '../../Shared/Model/product';
import { Router, ActivatedRoute} from '@angular/router';
import { Iregister } from 'src/app/Shared/Model/Registeration';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  presentUser = JSON.parse(localStorage.getItem('currentUser'));
public validateError:string;
public addproduct:FormGroup;
public submitted:boolean=false;
public viewpro:Iproduct[];
// public viewuser:Iregister[];
public productt:Iproduct;
public user:Iregister;
//  id: string;
//testing for CURD
//  taddproduct = new FormGroup({
//    Name:new FormControl('',[Validators.required]),
//    Brand:new FormControl('',[Validators.required]),
//    Ratings:new FormControl('',[Validators.required]),
//    OfferPrice:new FormControl('',[Validators.required]),
//    TotalPrice:new FormControl('',[Validators.required]),
//    Description:new FormControl('',[Validators.required]),
//    IsAvailable:new FormControl('',[Validators.required])
//  });
//  @Input() pro:Iproduct;
// showForm:boolean;

//  editProductForm = new FormGroup({
//        Name:new FormControl('',[Validators.required]),
//        Brand:new FormControl('',[Validators.required]),
//        Ratings:new FormControl('',[Validators.required]),
//        OfferPrice:new FormControl('',[Validators.required]),
//        TotalPrice:new FormControl('',[Validators.required]),
//        Description:new FormControl('',[Validators.required]),
//        IsAvailable:new FormControl('',[Validators.required])
//  });

  constructor(private product:FormBuilder,
    private registerservice:registerservices,
    private adminServices:registerservices,
    private router:Router,
    private route:ActivatedRoute) { }



  ngOnInit() {
   this.addproduct=this.product.group({
      Name:['',Validators.required],
      Brand:['',Validators.required],
      Ratings:['',Validators.required],
      OfferPrice:['',Validators.required],
      TotalPrice:['',Validators.required],
      Description:['',Validators.required],
      IsAvailable:['',Validators.required],
    });



  this.registerservice.getproduct().subscribe(data =>{
    this.viewpro=data;
    console.log(data);
  });

  // this.registerservice.getuser().subscribe(data =>{
  //   this.viewuser=data;
  // console.log(data);
  //  });


  // this.route.paramMap.subscribe(params =>{
  //   const proId = +params.get('_id');
  //   if (proId){
  //     this.getproducttoedit(proId);
  //   }
  // })

  }

// newproduct(){
//   if(this.taddproduct.valid){
//     this.registerservice.addProduct(this.taddproduct.value).subscribe(res => {
//       alert('Product added Successfully');
//       this.taddproduct.reset();
//       this.router.navigate(["/admin"]);
//     })
//   }
// }

// removeUser(){
//   this.user._id = this.route.snapshot.paramMap.get("id");
//   this.registerservice.deleteregister(this.user._id).subscribe(res => {
//     console.log(res);
//     this.router.navigate(['admin']);
//   });
// }

// removeProduct(){
//   this.productt._id = this.route.snapshot.paramMap.get("id");
//   this.registerservice.deleteProduct(this.productt._id).subscribe(res => {
//     console.log(res);
//     alert("Product Deleted Successfully");
//     this.router.navigate(['admin']);
//   });
// }

// deleteUser(id:string){
//   this.registerservice.deleteUser(id).subscribe(
//     () => console.log(`User with Id = ${id} deleted`),
//     (err) => console.log(err) 
//   );
// }

editProduct(productId:string){
  this.router.navigate(['/edit',productId]);
}

// deleteProduct(id){
//   this.registerservice.deleteProduct(id).subscribe(
//     () => console.log(`Product with Id = ${id} deleted`),
//     (err) =>console.log(err)
//   );  
// }
// showEdit(){
//   this.showForm = !this.showForm
// }

// editProduct(){
//   this.id = this.route.snapshot.paramMap.get("id");
//   if(this.editProductForm.valid){
//     this.registerservice.editProduct(this.editProductForm.value,this.id).subscribe(res => {
//       alert('Product updated Successfully');
//       this.editProductForm.reset();
//       this.router.navigate(["/admin"])
//     })
//   }
// }
//   getproducttoedit(_id:number){
// this.registerservice.getproductid(_id).subscribe();
//   }


// its works perfectly
  //  onSubmit(data:Iproduct){
  //    this.submitted = true;
  //    console.log(data);
  //    this.registerservice.addproduct(data).subscribe(data=>{
  //      alert('Product added Successfully');
  //      console.log(data);
  //    })
  //  }

  // testing for CURD



  aLogout(){
    this.adminServices.adminLogout();
  }



  //  editListing(){
  //    this.id = this.route.snapshot.paramMap.get("id");
  //    if(this.editListingForm.valid){
  //      this.registerservice.editListing(this.editListingForm.value,this.id)
  //      .subscribe(res => {
  //        this.editListingForm.reset();
  //        this.router.navigate(["/admin"]);
  //      })
  //    }
  //  }

// removeListing(){
//   this.id = this.route.snapshot.paramMap.get("id");
//   this.registerservice.deleteproduct(this.id).subscribe(res => {
//     console.log(res);
//     this.router.navigate(["/admin"]);
//   });
// }

  // onSubmit(data:Iproduct){
  //   this.submitted = true;
  //   if(!this.addproduct.valid){return;}
  //   console.log(data);
  //   this.registerservice.addproduct(data).subscribe(data=>{
  //     if(data.UserIdentity){
  //     alert('Product added Successfully');
  //     console.log(data);
  //     }else{
  //       console.log(data.Error);
  //       this.validateError = data.Error;
  //     }
  //   })
  // }

}
