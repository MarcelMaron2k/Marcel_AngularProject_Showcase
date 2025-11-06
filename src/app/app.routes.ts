import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {path: '',pathMatch:'full',redirectTo:'home'},
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'catalog', component:CatalogComponent},
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'profile', component:ProfileComponent, children:[
        {path:'', pathMatch:'full', redirectTo:'login'},
        {path:'login', component: LoginComponent },
        {path:'register', component:RegisterComponent},
        {path:'user', component:UserDetailsComponent},
    ]},
    {path: 'manageProducts', component: ManageProductsComponent, children:[
        {path:'', pathMatch:'full', redirectTo:'viewProdcuts'},
        {path:'viewProducts', component: ViewProductsComponent },
        {path:'editProducts', component: EditProductComponent},
        {path:'addProducts', component: AddProductComponent},
    ]},
    {path: '**', component:Page404Component}
];