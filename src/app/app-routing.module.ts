import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/films/add/add.component';
import { EditComponent } from './pages/films/edit/edit.component';
import { ListComponent } from './pages/films/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "users", children: [
    { path: "", component: UsersComponent },
    { path: ":id", component: UserDetailComponent }
  ]},
  { path: "signup", component: SignupComponent },
  { path: "films", children: [
    { path: "", component: ListComponent },
    { path: "add", component: AddComponent },
    { path: "edit/:id", component: EditComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
