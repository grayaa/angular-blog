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

  @Input() post:  Post;
  constructor(private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    post.loveIts ++;
    this.UpdateLoveIt(post, post.loveIts);
  }

  onDontLoveIt(post: Post) {
    post.loveIts --;
    this.UpdateLoveIt(post, post.loveIts);
  }

  UpdateLoveIt(post: Post, loveIts: number) {
    this.postsService.saveLoveIts(post, loveIts);
  }

  onDeletePost(post: Post) {
      this.postsService.removePost(post);
  }

}
