// pushed succesfully
import { Component, OnInit } from '@angular/core';
import { registerservices } from 'src/app/Shared/Model/Services/register.services';
import { Validators,FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Iproduct } from '../../Shared/Model/product';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
public validateError:string;
public addproduct:FormGroup;
public submitted:boolean=false;
productt:Iproduct;
pageTitle:string;
urlImage:string;
selectFile;
// public viewpro:Iproduct[];

//testing for CURD
// taddproduct = new FormGroup({
//   Name:new FormControl('',[Validators.required]),
//   Brand:new FormControl('',[Validators.required]),
//   Ratings:new FormControl('',[Validators.required]),
//   OfferPrice:new FormControl('',[Validators.required]),
//   TotalPrice:new FormControl('',[Validators.required]),
//   Description:new FormControl('',[Validators.required]),
//   IsAvailable:new FormControl('',[Validators.required])
// });
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
public headers: HttpHeaders;
 
  constructor(private product:FormBuilder,
    private registerservice:registerservices,
    private adminServices:registerservices,
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient) { 

      this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.headers.append('Content-Type', 'application/file');

    }



  ngOnInit() {
   this.addproduct=this.product.group({
      Name:['',Validators.required],
      Brand:['',Validators.required],
      Ratings:['',Validators.required],
      OfferPrice:['',Validators.required],
      TotalPrice:['',Validators.required],
      Description:['',Validators.required],
      IsAvailable:['',Validators.required],
      image:['',Validators.required],
    });



  // this.registerservice.getproduct().subscribe(data =>{
  //   this.viewpro=data;
  //   console.log(data);
  // });


  this.route.paramMap.subscribe(params => {
    const proId = params.get('id');
    if(proId) {
      this.pageTitle = "Edit  Product";
      this.getProduct(proId);
    }else{
      this.pageTitle = "Add New Product";
      this.productt = {
        _id:undefined,
        Name:'',
        Brand:'',
        image:'',
        Ratings:null,
        OfferPrice:null,
        TotalPrice:null,
        Description:'',
        IsAvailable:'',
      };
    }
  });

  }


getProduct(id:string) {
  this.registerservice.getProduct(id).subscribe(
    (product:Iproduct) => { 
      this.editProduct(product)
      this.productt = product
    },
    (err:any) => console.log(err)
  );
} 


editProduct(product:Iproduct){
  this.addproduct.patchValue({
    Name:product.Name, 
    Brand:product.Brand,
    Ratings:product.Ratings,
    OfferPrice:product.OfferPrice,
    TotalPrice:product.TotalPrice,
    Description:product.Description,
    IsAvailable:product.IsAvailable,
    // image:this.urlImage

  });
}

onSubmit(data):void{
  this.mapFormValuesToProductModel();
  if (this.productt._id){
  this.registerservice.updateProduct(this.productt).subscribe(
    () => this.router.navigate(['admin']),
    (err: any) => console.log(err)
  );
  } else {
              data.image = this.urlImage;
              console.log(data);
    this.registerservice.addproduct(data).subscribe(
      () => this.router.navigate(['admin']),
      (err: any) => console.log(err)
    ); 
  }
}


// submitUpload() {
//   const formData = new FormData();
//   formData.append('image',this.productt.image);
//   this.http.post<any>("http:localhost:4416/api/upload/uploadfile",formData).subscribe(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );
// }


mapFormValuesToProductModel(){
  this.productt.Name=this.addproduct.value.Name;
  this.productt.Brand=this.addproduct.value.Brand;
  this.productt.Ratings=this.addproduct.value.Ratings;
  this.productt.OfferPrice=this.addproduct.value.OfferPrice;
  this.productt.TotalPrice=this.addproduct.value.TotalPrice;
  this.productt.Description=this.addproduct.value.Description;
  this.productt.IsAvailable=this.addproduct.value.IsAvailable;
  this.productt.image=this.addproduct.value.urlImage;
}



removeProduct(){
  this.productt._id = this.route.snapshot.paramMap.get("id");
  this.registerservice.deleteProduct(this.productt._id).subscribe(res => {
    console.log(res);
    alert("Product Deleted Successfully");
    this.router.navigate(['admin']);
  });
}



//commented two paragraph code for add product woking
 selectImage(event) {
  this.selectFile = event.target.files[0];
  if (event.target.files && event.target.files.length > 0) {
    let fd = new FormData();
    fd.append('image', this.selectFile, this.selectFile.name);

    
  this.http.post<any>("http://localhost:4416/api/upload/file",fd).subscribe(
    (res) => {
      console.log(res);
      this.urlImage = res.data.image;
    },
    (err) => console.log(err)
  );
  }
 }



//   submitUpload() {
//     const formData = new FormData();
//     formData.append('image',this.productt.image);
//     this.http.post<any>("http:localhost:4416/api/upload/uploadfile",formData).subscribe(
//       (res) => console.log(res),
//       (err) => console.log(err)
//     );
//   }




//new code for image 
// selectImage(event) {
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.productt.image = file;
//   }
// }

// submitUpload(){
 
//   this.http.post<any>("http://localhost:4416/api/file/file",formData).subscribe(
//     (res) => {
//       this.urlImage = res.data.image;
//     },
//     (err) => console.log(err)
//   );
// }
//new code for image ended


// newproduct(){-
//   if(this.addproduct.valid){
//     this.registerservice.addproduct(this.addproduct.value).subscribe(res => {
//       alert('Product added Successfully');
//       this.addproduct.reset();
//       this.router.navigate(["/admin"]);
//     })
//   }
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
  // testing for CURD



  aLogout(){
    this.adminServices.adminLogout();
  }

// removeListing(){
//   this.id = this.route.snapshot.paramMap.get("id");
//   this.registerservice.deleteproduct(this.id).subscribe(res => {
//     console.log(res);
//     this.router.navigate(["/admin"]);
//   });
// }


}
