import * as THREE from 'three'
import Experience from "./Experience";
export default class Camera {
    constructor(canvas) {
        this.experience = new Experience();
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene

        this.canvas = this.experience.canvas

        // console.log(this.canvas)

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
        this.scene.add(this.perspectiveCamera);
    }
    createOrthographicCamera() {
        this.frustum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustum) / 2,
            (this.sizes.aspect * this.sizes.frustum) / 2,
            (this.sizes.frustum / 2),
            (-this.sizes.frustum / 2),
            0.1,
            100
        );
        this.scene.add(this.orthographicCamera)
    }

    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix()

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustum) / 2
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustum) / 2
        this.orthographicCamera.top = (this.sizes.frustum / 2)
        this.orthographicCamera.bottom = (-this.sizes.frustum / 2)
        this.orthographicCamera.updateProjectionMatrix()
    }

    update() {

    }



}