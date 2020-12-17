import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = 'Favorite Links';
  favLinks = ['https://www.instagram.com/', 'https://shopgoldengems.com/'];
  constructor() { }

  ngOnInit() {
  }

}