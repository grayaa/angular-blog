import { Component } from '@angular/core';
import { Post } from './Post';

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





}
