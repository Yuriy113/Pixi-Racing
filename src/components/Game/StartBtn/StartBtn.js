import { Container, Graphics } from 'pixi.js';

export class StartBtn extends Container {
  constructor() {
    super();
    this.button = new Graphics();
    this.button.beginFill(0xde3249);
    this.button.drawRect(665, 500, 100, 50);
    this.button.endFill();

    this.addChild(this.button);
  }
}
