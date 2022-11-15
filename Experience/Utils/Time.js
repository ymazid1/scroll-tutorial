export default class Time {
    constructor() {
        this.start = Date.now();
        this.currentTime = this.start;
        this.elapsedTime = 0;
        this.deltaTime = 16;

        this.update()
    }

    update() {
        const currentTime = Date.now();
        this.deltaTime = currentTime - this.currentTime;
        this.currentTime = currentTime;

        this.elapsedTime = this.currentTime - this.start;

        window.requestAnimationFrame(() => this.update(  ))
    }
}