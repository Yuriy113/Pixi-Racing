import { Container, TilingSprite } from 'pixi.js';
import { Car } from '../Car/Car';
import { TrashHurdle } from '../TrashHurdle/TrashHurdle';
import { app } from '../../..';

export class Road extends Container {
  constructor(url) {
    super();
    this.url = url;
    this.setup();
  }

  setup() {
    this.road = new TilingSprite(this.url.road, 450, 600);
    this.road.x = 400 - this.road.width / 2;
    this.car = new Car(this.url.car);

    //===============================

    // this.hurdle = new TrashHurdle(this.url.hurdle);
    // this.road.addChild(this.hurdle);

    // ==============================

    this.road.tileScale.set(0.3);
    this.addChild(this.road);
    console.log(this.road.tilePosition.y);
    this.addChild(this.car);
    this.car.controls(this.road.x, this.boost, this.stop);
    this.road.velocity = 0;
  }

  boost = () => {
    this.road.velocity += 1;
    console.log(this.road.velocity);
  };

  stop = () => {
    if (this.road.velocity > 0) {
      this.road.velocity -= 1;
    }
    console.log(this.road.velocity);
  };

  addHurdles() {
    console.log('addHurdles');
    setInterval(() => {
      this.hurdle.y = 0;
      // this.road.addChild(this.hurdle);
      // this.hurdle.x = Math.random * 450;
    }, 10);
  }

  move() {
    app.app.ticker.add(() => {
      this.road.tilePosition.y += this.road.velocity;
    });
  }
}
