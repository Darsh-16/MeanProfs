import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable,BehaviorSubject,throwError,of,pipe} from 'rxjs';
import { Router } from '@angular/router';
import { Iregister } from '../Registeration';
import { Ilogin } from '../userlogin';
import { Iproduct} from '../product';
import { map,filter,catchError,mergeMap } from 'rxjs/operators';
import { Iadminregister} from '../aregisteration'
import { Ialogin } from '../adminlogin';
import { OrderDetail} from '../OrderDetail.Model';
import { Icontactus } from '../contactus';
import { Imailerfp } from '../mailerfp';


@Injectable({providedIn:"root"})

export class registerservices{
    public header: HttpHeaders;
    private loggedIn: BehaviorSubject<Ilogin>;
    public currentUser: Observable<Ilogin>;
    private aloggedIn: BehaviorSubject<Ialogin>;
    public acurrentUser :Observable<Ialogin>;
    private registerendpoint:string="http://localhost:4416/api/register/Register";
    private getuserendpoint:string="http://localhost:4416/api/register/AllUsers";
    private adminregisterendpoint:string="http://localhost:4416/api/aregister/ARegister";
    private loginendpoint:string="http://localhost:4416/api/user/userloginauth";
    private adminloginendpoint:string="http://localhost:4416/api/admin/adminloginauth";
    private productendpoint:string="http://localhost:4416/api/product/AddProduct";
    private getproductendpoint:string="http://localhost:4416/api/product/AllProduct";
    private getproductidendpoint:string="http://localhost:4416/api/product/Product/";
    private getproductupdatepoint:string="http://localhost:4416/api/product/ProductUpdate/";
    private getproductremovepoint:string="http://localhost:4416/api/product/removeproduct/";
    private getuserdeletepoint:string="http://localhost:4416/api/register/removecustomer/";
    private postuploadfileendpoint:string="http://localhost:4416/api/uploads/uploadfile";
    private getproductiupdatepoint:string="http://localhost:4416/api/product/ImageUpdate/";
    private cartendpoint:string="http://localhost:4416/api/cart/AddToCart";
    private mailerfpendpoint:string="http://localhost:4416/api/usermailer/mailer";
    private contactusendpoint:string="http://localhost:4416/api/contactus/Contactus";


    
    private handleError(errorResponse:HttpErrorResponse){
        if (errorResponse.error instanceof ErrorEvent){
            console.error('Client Side Error:',errorResponse.error.message);
        }else{
            console.error('Server Side Error:',errorResponse);
        }
        return throwError('There is a problem with the sevice.We are working on it');
    }
    private httpOptions={
        headers:new HttpHeaders()
        .set("Content-Type","application/json")
        .set("x-auth-atoken",localStorage.getItem("atoken"))
    };

    constructor(private http:HttpClient,private router:Router){
        this.loggedIn = new BehaviorSubject<Ilogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.loggedIn.asObservable();
        this.aloggedIn = new BehaviorSubject<Ialogin>(JSON.parse(localStorage.getItem('acurrentUser')));
        this.acurrentUser = this.aloggedIn.asObservable();
        this.header=new HttpHeaders({'Content-Type':'application/json'})
    }


    get userLoggedIn():Ilogin{
        return this.loggedIn.value;
    }

    get adminLoggedIn():Ialogin{
        return this.aloggedIn.value;
    }



    adduser(register:Iregister):Observable<Iregister>{
        return this.http.post<Iregister>(this.registerendpoint,JSON.stringify(register),{headers:this.header})
    }

    // deleteregister(id:string):Observable<Iregister>{
    //     return this.http.delete<Iregister>(this.getuserdeletepoint + id);
    // }

    addadmin(aregister:Iadminregister):Observable<Iadminregister>{
        return this.http.post<Iadminregister>(this.adminregisterendpoint,JSON.stringify(aregister),{headers:this.header})
    }



login(Item:Ilogin):Observable<Ilogin>{
    return this.http.post<Ilogin>(this.loginendpoint,JSON.stringify(Item),{headers:this.header})
    .pipe(map(Item =>{
        if(Item && Item.UserIdentity){
            localStorage.setItem('currentUser',JSON.stringify(Item));
            this.loggedIn.next(Item);
            return Item;
        };
        return Item;
    }));
}

 alogin(Item:Ialogin):Observable<Ialogin>{
     return this.http.post<Ialogin>(this.adminloginendpoint,JSON.stringify(Item),{headers:this.header})
     .pipe(map(Item=>{
         if(Item && Item.AdminIdentity){
             localStorage.setItem('acurrentUser',JSON.stringify(Item));
             this.aloggedIn.next(Item);
             return Item;
         };
         return Item;
     }));
 }



userLogout(){
    localStorage.removeItem('currentUser');
    this.loggedIn.next(null);
    alert('Successfully Logged Out ,Thank You');
    this.router.navigateByUrl('/home');
}
 
adminLogout(){
    localStorage.removeItem('acurrentUser');
    this.aloggedIn.next(null);
    alert('Successfully Logged Out ,Thank You Admin');
    this.router.navigateByUrl('/home');
}


  addproduct(product:Iproduct):Observable<Iproduct>{
     return this.http.post<Iproduct>(this.productendpoint,JSON.stringify(product),{headers:this.header})
     }

  addcartitem(cproduct:Iproduct):Observable<Iproduct>{
      return this.http.post<Iproduct>(this.cartendpoint,JSON.stringify(cproduct),{headers:this.header})
  }
  

//   updateProduct(product :Iproduct):Observable<void>{
//     return this.http.put<void>(this.getproductupdatepoint+ product._id,product);

// }

    //this is testing for CURD
//    addProduct(product){
//     return this.http.post<any>(this.productendpoint,product,this.httpOptions);
//    }; 

//    editProduct(product,id:string){
//        return this.http.put<any>(`${this.getproductupdatepoint}/${id}`,product,this.httpOptions);
//    }


//edit product or to display product on admin to update
getProduct(id:string):Observable<Iproduct> {
    return this.http.get<Iproduct>(this.getproductidendpoint + id);
  
    // return this.http.get<Iproduct>(`${this.getproductidendpoint}/${id}`)
    // .pipe(catchError(this.handleError));
}
  deleteProduct(id :string):Observable<Iproduct> {
    return this.http.delete<Iproduct>(this.getproductremovepoint + id);
}

deleteUser(id:string):Observable<Iregister> {
    return this.http.delete<Iregister>(this.getuserdeletepoint + id);
}
// deleteregister(id:string):Observable<Iregister>{
//     return this.http.delete<Iregister>(this.getuserdeletepoint + id);
// }

 updateProduct(product :Iproduct):Observable<void>{
       return this.http.put<void>(this.getproductupdatepoint+ product._id,product);

 }

 updateProducti(producti:Iproduct):Observable<void>{
     return this.http.put<void>(this.getproductiupdatepoint+ producti._id,producti);
 }


getproduct():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.getproductendpoint,{headers:this.header})
    }

getuser():Observable<Iregister[]>{
    return this.http.get<Iregister[]>(this.getuserendpoint,{headers:this.header})
}

 getproductid(id: string){
     return this.http.get<Iproduct>(this.getproductidendpoint + id);
 }

 contactus(mailing:Icontactus): Observable<Icontactus> {
    return this.http.post<Icontactus>(this.contactusendpoint,JSON.stringify(mailing),{headers:this.header })
  }

 mailer(mailingfp:Ilogin): Observable<Ilogin>{
    return this.http.post<Ilogin>(this.mailerfpendpoint,JSON.stringify(mailingfp),{headers:this.header})
}

// trying to store the add to cart product in db
// addProductToCart(products:any):Observable<Iproduct>{
//     return this.http.post<Iproduct>(this.cartendpoint,JSON.stringify(products),{headers:this.header})

//  }




//works perfectly fine but stores the cart data in localStorage not in db
 addProductToCart(products:any){
     localStorage.setItem("product",JSON.stringify(products));
 }

getProductFromCart(){
    return JSON.parse(localStorage.getItem('product'));
 }

removeAllProductFromCart(){
    return localStorage.removeItem("product");
}
errorHandler(error:Response){
    console.log(error);
    return throwError(error);
}

deleteproduct(id: string){
    return this.http.delete(`${this.getproductremovepoint}/${id}`, this.httpOptions);
}







}






