import {Route} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import {QuickviewComponent} from './Components/quickview/quickview.component';
import {FooterComponent} from './Components/footer/footer.component';
import {NavigationComponent} from './Components/navigation/navigation.component';
import {ContactusComponent} from './Components/contactus/contactus.component';
import {HotarrivalsComponent} from './Components/hotarrivals/hotarrivals.component';
import { ProfileComponent } from './Components/profile/profile.component';
import {AdminComponent} from './Components/admin/admin.component'
import { AuthGuard } from './authguard/auth';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { BevragesComponent } from './Components/bevrages/bevrages.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { MycartComponent} from './Components/mycart/mycart.component';
import { CheckoutComponent} from './Components/checkout/checkout.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { CreateproductComponent } from './Components/createproduct/createproduct.component';
import { SrmComponent } from './Components/srm/srm.component';
import { ConfirmorderComponent } from './Components/confirmorder/confirmorder.component';
import { AttaComponent } from './Components/atta/atta.component';
import { VegetablesComponent } from './Components/vegetables/vegetables.component';


export const routes:Route[] = [
    {
        path:'',
        component:HomeComponent
    
    },
    {
    path:'home',
    component:HomeComponent
      
},
{
    path:'quickview/:id',
    component:QuickviewComponent
},
{
    path:'footer',
    component:FooterComponent
},
{
    path:'navigation',
    component:NavigationComponent
},
{
    path:'contactus',
    component:ContactusComponent
},
{
    path:'hotarrivals',
    component:HotarrivalsComponent
},
{
    path:'admin',
    component:AdminComponent
    // canActivate:[AuthGuard]

},
{
    path:'profile',
    component:ProfileComponent
},
{
    path:'grocery',
    component:GroceryComponent
},
{
    path:'bevrages',
    component:BevragesComponent
},
{
    path:'fruits',
    component:FruitsComponent
},
{
    path:'mycart',
    component:MycartComponent,
    canActivate:[AuthGuard]
},
{
    path:'checkout',
    component:CheckoutComponent
},
{
    path:'resetpassword',
    component:ResetpasswordComponent
},
{
    path:'updatepassword',
    component:UpdatepasswordComponent
},
{
    path:'edit/:id',
    component:CreateproductComponent
},
{
    path:'create',
    component:CreateproductComponent
},
{
    path:'srm',
    component:SrmComponent
},
{
    path:'confirmorder',
    component:ConfirmorderComponent
},
{
    path:'atta',
    component:AttaComponent
},
{
    path:'vegetables',
    component:VegetablesComponent
}
]