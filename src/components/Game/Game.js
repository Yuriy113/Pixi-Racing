import * as PIXI from 'pixi.js';
import { Renderer } from 'pixi.js';
import { Road } from './Road/Road';
import { StartBtn } from './StartBtn/StartBtn';

export class Game extends PIXI.Container {
  constructor(assets) {
    super();
    this.assets = assets;
    this.road = new Road(this.assets);
    this.addChild(this.road);
    this.startBtn = new StartBtn();
    this.addChild(this.startBtn);
    this.startBtn.buttonMode = true;
    this.startBtn.interactive = true;
    this.startBtn.on('pointerdown', () => this.loop());
  }

  loop() {
    this.road.move();
  }
}
