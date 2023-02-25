import { Container, Sprite } from 'pixi.js';

export class Car extends Container {
  constructor(url) {
    super();
    this.url = url;
    this.car = Sprite.from(this.url);
    this.car.scale.set(0.5);
    this.car.x = 335;
    this.car.y = 320;
    this.addChild(this.car);
  }

  move() {}

  crash() {}
}
