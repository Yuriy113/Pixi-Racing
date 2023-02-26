import { Container, Sprite } from 'pixi.js';

export class TrashHurdle extends Container {
  constructor(url) {
    super();
    this.hurdle = Sprite.from(url);
    this.addChild(this.hurdle);
  }
}
