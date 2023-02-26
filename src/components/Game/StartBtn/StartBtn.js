import { Container, Graphics, Text } from 'pixi.js';

export class StartBtn extends Container {
  constructor() {
    super();
    this.x = 650;
    this.y = 500;
    this.button = new Graphics();
    this.button.beginFill(0x8f8f8f);
    this.button.drawRoundedRect(0, 0, 100, 50, 10);
    this.button.endFill();

    this.addChild(this.button);

    this.buttonTxt = new Text('START', {
      fill: ['#ffffff'],
      fontWeight: 'bold',
    });
    this.buttonTxt.x = 8;
    this.buttonTxt.y = 10;
    this.button.addChild(this.buttonTxt);
  }
}
