import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';
// import { title } from 'process';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  postList: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getPostList();
  }

  getProducts() {
    this.products = this.productService.getData();
  }

  getPostList() {
    this.productService.getPostList().subscribe((res: any) => {
      console.log(res);
      this.postList = res;
    });
  }
}
