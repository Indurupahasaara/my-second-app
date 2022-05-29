import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  selectedId!: any;
  post!: any;
  params!: any;
  isReadOnly: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.params;

    //when using  query params
    // this.params.id = this.route.snapshot.queryParamMap.get('id');
    // this.params.type = this.route.snapshot.queryParamMap.get('type');

    if (this.params) {
      if (this.params.type == 'view') {
        this.isReadOnly = true;
      }
      this.getPost(this.params.postId);
    }

    this.selectedId = this.route.snapshot.paramMap.get('id');

    if (this.selectedId) {
      this.getPost(this.selectedId);
    }
  }

  getPost(id: number): void {
    this.postService.getPostById(id).subscribe((res) => {
      this.post = res;
    });
  }
}
