import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {

  places = [
    { name: 'Dubai', imgUrl: '../../assets/image/dubai.jpg', region: 'foreign'},
    { name: 'Florence', imgUrl: '../../assets/image/Flo.jpg', region: 'foreign'},
    { name: 'Hong Kong', imgUrl: '../../assets/image/hongkong.jpg', region: 'foreign'},
    { name: 'Koh Samui', imgUrl: '../../assets/image/koh_samui.jpg', region: 'foreign'},
    { name: 'Paris', imgUrl: '../../assets/image/paris.jpeg', region: 'foreign'},
    { name: 'Punta Cana', imgUrl: '../../assets/image/punta_cana.jpg', region: 'foreign'},
    { name: 'Rio de Janeiro', imgUrl: '../../assets/image/Rio.jpg', region: 'foreign'},
    { name: 'Vatican City', imgUrl: '../../assets/image/vatican_city.jpeg', region: 'foreign'},
    { name: 'Orlando', imgUrl: '../../assets/image/orlando.jpg', region: 'domestic'},
    { name: 'Los Angeles', imgUrl: '../../assets/image/Los_Angeles.jpeg', region: 'domestic'},
    { name: 'Las Vegas', imgUrl: '../../assets/image/Las_Vegas.jpg', region: 'domestic'}
  ];
  place: object;

  constructor() { }

  ngOnInit() {
  }

  pick() {
    if($(":checked").val() == 'domestic') {
      let num = this.getRndInteger(8,11);
      this.place = this.places[num];
    } else if ($(":checked").val() == 'foreign') {
      let num = this.getRndInteger(0,8);
      this.place = this.places[num];
    }
  }

  getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
