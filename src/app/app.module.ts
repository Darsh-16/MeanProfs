import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Injectable, Type } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
// import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { CarouselModule } from 'ngx-bootstrap';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotarrivalsComponent } from './Components/hotarrivals/hotarrivals.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import {APP_BASE_HREF} from '@angular/common';
import { AdminComponent } from './Components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { BevragesComponent } from './Components/bevrages/bevrages.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { DataFilterPipe } from './data-filter.pipe';
import { CreateproductComponent } from './Components/createproduct/createproduct.component';
import { SrmComponent } from './Components/srm/srm.component';
import { ConfirmorderComponent } from './Components/confirmorder/confirmorder.component';
import { VegetablesComponent } from './Components/vegetables/vegetables.component';
import { AttaComponent } from './Components/atta/atta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    QuickviewComponent,
    HotarrivalsComponent,
    ContactusComponent,
    AdminComponent,
    ProfileComponent,
    GroceryComponent,
    BevragesComponent,
    FruitsComponent,
    MycartComponent,
    CheckoutComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    DataFilterPipe,
    CreateproductComponent,
    SrmComponent,
    ConfirmorderComponent,
    VegetablesComponent,
    AttaComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
  // schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
