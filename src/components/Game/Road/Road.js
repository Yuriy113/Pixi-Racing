import { Container, TilingSprite } from 'pixi.js';
import { Car } from '../Car/Car';
import { TrashHurdle } from '../TrashHurdle/TrashHurdle';
import { app } from '../../..';
import { STATES } from '../GameStates/GameStates';

export class Road extends Container {
  constructor(url) {
    super();
    this.url = url;
    this.setup();
    this.state = null;
    console.log(this.state);
  }

  setup() {
    this.road = new TilingSprite(this.url.road, 450, 600);
    this.road.x = 400 - this.road.width / 2;
    this.car = new Car(this.url.car);

    this.road.tileScale.set(0.3);
    this.addChild(this.road);
    console.log(this.road.tilePosition.y);
    this.addChild(this.car);
    this.car.controls(this.road.x, this.boost, this.stop);
    this.road.velocity = 0;

    this.addHurdles();
    // this.hurdle = new TrashHurdle(this.url.hurdle);
    // this.road.addChild(this.hurdle);
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
    setInterval(() => {
      if (this.road.velocity > 0) {
        this.hurdle = new TrashHurdle(this.url.hurdle);
        this.hurdle.x = Math.random() * 450;
        this.hurdle.y = -100;
        this.road.addChild(this.hurdle);

        console.log('hurdle created');
        console.log(this.road.children);
      }
    }, 5000);
  }

  move() {
    app.app.ticker.add(() => {
      this.road.tilePosition.y += this.road.velocity;

      if (this.hurdle) {
        this.hurdle.y += this.road.velocity;
      }
    });
  }
}
