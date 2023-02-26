import * as PIXI from 'pixi.js';
import { pixiAppConfig } from '../config/pixiAppConfig';
import { Game } from './Game/Game';
import { Preloader } from './Preloader/Preloader';

export class App {
  constructor() {
    this.root = document.querySelector('#root');
    this.app = new PIXI.Application(pixiAppConfig);
    this.preloader = new Preloader();
    this.root.append(this.app.view);

    this.setup();
  }

  async setup() {
    const assets = await this.preloader.loadAssets();
    this.game = new Game(assets);
    this.app.stage.addChild(this.game);
  }
}
