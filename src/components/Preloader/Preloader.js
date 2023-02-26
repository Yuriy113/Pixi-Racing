import * as PIXI from 'pixi.js';
import { Assets } from '@pixi/assets';
import { ASSETS_PATHS } from '../../config/assetsPaths';

export class Preloader extends PIXI.Container {
  constructor() {
    super();
  }

  async loadAssets() {
    Assets.addBundle('race', ASSETS_PATHS);
    this.assets = await Assets.loadBundle('race');
    console.log(this.assets);
    return this.assets;
  }
}
