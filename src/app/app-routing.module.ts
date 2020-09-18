import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import { LayoutComponent } from './layout/layout.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutCategoryComponent } from './layout-category/layout-category.component';
import { LayoutProductComponent } from './layout-product/layout-product.component';
import { LayoutUserComponent } from './layout-user/layout-user.component';

// Admin
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: LayoutHomeComponent
      },
      {
        path: 'danh-muc/:id',
        component: LayoutCategoryComponent
      },
      {
        path: 'san-pham/:id',
        component: LayoutProductComponent
      },
      {
        path: 'thanh-vien',
        component: LayoutUserComponent
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: AdminHomeComponent
      },
      {
        path: 'category',
        component: AdminCategoryComponent
      },
      {
        path: 'product',
        component: AdminProductComponent
      },
      {
        path: 'user',
        component: AdminUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
