import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postList: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.productService.getPostList().subscribe((res: any) => {
      console.log(res);
      this.postList = res;
    });
  }
}
