import { Component } from '@angular/core';
import { Post } from './models/Post.model';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 5,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: -2,
      created_at: new Date(),
    },
    {
      title: 'Mon troixième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 0,
      created_at: new Date(),
    }
  ];


  constructor() {
    const config = {
      apiKey: 'AIzaSyB18HCU7QvnMPELSoQKdfMy4bWt6NEAM_c',
      authDomain: 'blog-8e5a9.firebaseapp.com',
      databaseURL: 'https://blog-8e5a9.firebaseio.com',
      projectId: 'blog-8e5a9',
      storageBucket: 'blog-8e5a9.appspot.com',
      messagingSenderId: '113583934555'
    };
    firebase.initializeApp(config);
  }






}
