import * as THREE from 'three'

import Experience from "../Experience";
export default class Environment {
    constructor(canvas) {
        this.experience = new Experience();
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setSunlight()

    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(1,1,1)
        this.scene.add(this.sunLight);
    }
}