import { Container, Sprite } from 'pixi.js';

export class TrashHurdle extends Container {
  constructor(url) {
    super();
    this.spriteHurdle = Sprite.from(url);
    this.addChild(this.spriteHurdle);
  }
}
