import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostsnewComponent } from './components/postsnew/postsnew.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { DeactivateGuard } from './shared/guards/deactivate.guard';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './pipes/reverse.pipe';
import { SqrootPipe } from './pipes/sqroot.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFromV2Component } from './components/reactive-from-v2/reactive-from-v2.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ReactiveFormV3Component } from './components/reactive-form-v3/reactive-form-v3.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CommonInterceptor } from './shared/interseector/common.interceptor';
import { ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product-list',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
    canActivate: [AuthGuard],
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'pipes',
    component: PipesExampleComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details',
    component: PostsnewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
  },
  {
    path: 'post-details',
    component: PostDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFromV2Component,
  },
  {
    path: 'reactive-form-v3',
    component: ReactiveFormV3Component,
  },
  {
    path: 'template-driven-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: '**',
    component: ChildComponent,
    // redirectTo: 'product-list',
    // pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FeaturedListComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    CurrencyInputDirective,
    PostsComponent,
    PostsnewComponent,
    PostDetailComponent,
    LoginComponent,
    PipesExampleComponent,
    ReversePipe,
    SqrootPipe,
    FileSizePipe,
    PowerPipe,
    RepeatPipe,
    ObservableComponent,
    ReactiveFormComponent,
    ReactiveFromV2Component,
    InvoiceComponent,
    ReactiveFormV3Component,
    CustomerComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:CommonInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
