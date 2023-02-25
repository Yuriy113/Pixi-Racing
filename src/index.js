import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { App } from './components/App';

import './index.css';

console.log('PIXI', PIXI);
window.PIXI = PIXI;

export const app = new App();
window.app = app;
