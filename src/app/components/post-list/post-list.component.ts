import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  books: Post[];
  postsSubscribtion: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscribtion = this.postsService.postsSubject.subscribe(
      (post: Post[]) => {
        this.posts = post;
      }
    );
    this.postsService.emitPosts();
  }

  onNewBook() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeleteBook(post: Post) {
    this.postsService.removePost(post);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }
  
  ngOnDestroy() {
    this.postsSubscribtion.unsubscribe();
  }

}
