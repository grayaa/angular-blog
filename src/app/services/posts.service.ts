import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();


  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  saveposts() {
      firebase.database().ref('/posts').set(this.posts);
  }
}
