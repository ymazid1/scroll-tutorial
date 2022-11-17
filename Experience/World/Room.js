import Experience from "../Experience";
export default class Room {
    constructor(canvas) {
        this.experience = new Experience();
        this.scene = this.experience.scene

        this.resources = this.experience.resources
        this.room = this.resources.items.room

        this.actualRoom = this.room.scene

        this.setModal();

    }

    setModal() {
        this.actualRoom.children.forEach(element => {
            child.castShadow = true;
            child.receiveShadow = true;
        });
        this.actualRoom.scale.set(0.11, 0.11, 0.11)
        this.scene.add(this.actualRoom)
    }
}