import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';

import Room from './Room';
export default class World {
    constructor(canvas) {
        this.experience = new Experience();
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.resources = this.experience.resources

        
        this.resources.on('ready', () => {
            this.room = new Room();
            this.envirionment = new Environment();
        })



    }




}