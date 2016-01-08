export class Rectangle {
    id: number = Date.now();
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number) {
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }

    moveAt(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    resize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}
