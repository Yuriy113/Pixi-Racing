import { Container, Sprite } from 'pixi.js';

export class Car extends Container {
  constructor(url) {
    super();
    this.url = url;
    this.car = Sprite.from(this.url);
    this.car.scale.set(0.4);
    this.car.x = 350;
    this.car.y = 370;
    this.addChild(this.car);
  }

  controls(roadX, boost, stop) {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowRight') {
        console.log('Move Right');
        if (this.car.x < roadX + 350) {
          this.car.x += 5;
        }
      } else if (e.code === 'ArrowLeft') {
        console.log('Move Left');
        if (this.car.x > roadX) {
          this.car.x -= 5;
        }
      } else if (e.code === 'ArrowUp') {
        console.log(e.code);
        boost();
      } else {
        stop();
      }
    });
  }

  crash() {}
}
