import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from "@angular/common";
import fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListComponent } from './pages/films/list/list.component';
import { AddComponent } from './pages/films/add/add.component';
import { EditComponent } from './pages/films/edit/edit.component';
import { FormComponent } from './components/film/form/form.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UsersComponent,
    UserDetailComponent,
    SignupComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
