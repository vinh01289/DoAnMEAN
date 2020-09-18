import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutCategoryComponent } from './layout-category/layout-category.component';
import { LayoutProductComponent } from './layout-product/layout-product.component';
import { LayoutUserComponent } from './layout-user/layout-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

import { HttpClientModule } from '@angular/common/http';
import { LayoutCategorySidebarComponent } from './layout-category-sidebar/layout-category-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHomeComponent,
    LayoutCategoryComponent,
    LayoutProductComponent,
    LayoutUserComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminUserComponent,
    LayoutCategorySidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
