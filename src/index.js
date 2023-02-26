import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { App } from './components/App';

import './index.css';

window.PIXI = PIXI;

export const app = new App();
window.app = app;
