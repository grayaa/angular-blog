import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscribtion: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSubscribtion = this.postsService.postsSubject.subscribe(
      (post: Post[]) => {
        this.posts = post;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscribtion.unsubscribe();
  }

}
