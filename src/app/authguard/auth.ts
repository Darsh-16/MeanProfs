import { Injectable} from '@angular/core';
import { CanActivate,Router} from '@angular/router'
import { registerservices } from '../Shared/Model/Services/register.services';
@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    constructor(private registerservice:registerservices,private router:Router){}
    canActivate(){
        let token = localStorage.getItem('currentUser');
        if(!token){
            alert('Please login first !');
            this.router.navigateByUrl('/home');
            return false;
        }
        else{
            return true;
        }
    }
}
