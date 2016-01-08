export class MoveRectangleAction {
    constructor(
        public id: number, 
        public dx: number, 
        public dy: number) {
    }
}

export class CreateRectangleAction {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number) {
    }
}

export class ResizeRectangleAction {
    constructor(
        public id: number,
        public dx: number,
        public dy: number,
        public width: number,
        public height: number) {
    }
}
