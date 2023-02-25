import { autoDetectRenderer, Container, Sprite, TilingSprite } from 'pixi.js';
import { Ticker } from 'pixi.js';
import { Car } from '../Car/Car';
import { app } from '../../..';
import { App } from '../../App';

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

    this.road.tileScale.set(0.3);
    this.addChild(this.road);
    this.addChild(this.car);
  }

  move() {
    console.log(app);

    app.app.ticker.add((delta) => {
      this.road.tilePosition.y += 1;
    });
  }
}
