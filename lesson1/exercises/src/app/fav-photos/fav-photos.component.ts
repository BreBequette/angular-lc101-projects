import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/124259684_10158284019162740_910862909178768539_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=f4PsnNU7qUoAX8Exgcp&_nc_ht=scontent-ort2-1.xx&oh=4d29afc875dd28705f22645f7cbedc3a&oe=5FF5374D';
  image3 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/122573713_10158254130902740_8941201464891309531_o.jpg?_nc_cat=108&ccb=2&_nc_sid=84a396&_nc_ohc=JLU9Wxy3gFcAX-8sRet&_nc_ht=scontent-ort2-1.xx&oh=ce1b8f26786a44f4b48426f0d258cdba&oe=5FF7B3F9';

  constructor() { }

  ngOnInit() {
  }

}