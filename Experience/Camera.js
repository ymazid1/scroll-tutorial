import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
    constructor(canvas) {
        this.experience = new Experience();
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene

        this.canvas = this.experience.canvas

        // console.log(this.canvas)

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls()
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            100
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5
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
        const size = 10;
        const division = 10;

        const gridHelper = new THREE.GridHelper(size, division);
        this.scene.add(gridHelper)
        const axesHelper = new THREE.AxesHelper(10);
        this.scene.add(axesHelper)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;

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
        this.controls.update();
    }



}