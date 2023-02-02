import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/home/index/index.component';
import { NewComponent } from './components/inventory/new/new.component';
import { UsedComponent } from './components/inventory/used/used.component';
import { DetailsComponent } from './components/inventory/details/details.component';
import { SpaecialsComponent } from './components/home/spaecials/spaecials.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { PurchaseComponent } from './components/sales/purchase/purchase.component';
import { VehiclesComponent } from './components/admin/vehicles/vehicles.component';
import { AddvehicleComponent } from './components/admin/addvehicle/addvehicle.component';
import { EditvehicleComponent } from './components/admin/editvehicle/editvehicle.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AdduserComponent } from './components/admin/adduser/adduser.component';
import { EdituserComponent } from './components/admin/edituser/edituser.component';
import { ChangepasswordComponent } from './components/account/changepassword/changepassword.component';
import { MakeComponent } from './components/sales/make/make.component';
import { ModelsComponent } from './components/sales/models/models.component';
import { SpecialsComponent } from './components/admin/specials/specials.component';
import { SalesComponent } from './components/report/sales/sales.component';
import { InventoryComponent } from './components/report/inventory/inventory.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {path: 'homw', component: IndexComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  {path: 'new', component: NewComponent},
  {path: 'used', component: UsedComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'homespecials', component: SpaecialsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'vehicle', component: VehiclesComponent},
  {path: 'addvehicle', component: AddvehicleComponent},
  {path: 'editvehicle', component: EditvehicleComponent},
  {path: 'user', component: UsersComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'changepassword', component: ChangepasswordComponent},
  {path: 'make', component: MakeComponent},
  {path: 'model', component: ModelsComponent},
  {path: 'adminspecial', component: SpecialsComponent},
  {path: 'new', component: InventoryComponent},

  {path: 'inventory', component: InventoryComponent},
  {path: 'home', component: IndexComponent},
  {path: 'sales', component: SalesComponent},
  // {path: 'admin', component: InventoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
