import * as THREE from "three"

import Sizes from "./Utils/Size";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas = canvas;

        this.scene = new THREE.Scene();

        this.sizes = new Sizes();
        this.time = new Time();

        this.camera = new Camera()
        this.renderer = new Renderer();
    }
}