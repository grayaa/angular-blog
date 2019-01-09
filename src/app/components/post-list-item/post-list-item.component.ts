import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;


  @Input() post:  Post;
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onLoveIt(post: Post) {
    post.loveIts ++;
  }

  onDontLoveIt(post: Post) {
    post.loveIts --;
  }

}
