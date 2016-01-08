import * as Flux from 'flux';
import * as FluxUtils from 'flux/utils';
import * as Models from './Models';
import * as Actions from '../actions/Actions';
import CanvasAppDispatcher from '../dispatchers/CanvasAppDispatcher';

class CanvasStore extends FluxUtils.Store {
    private _rectangles: { [key: number]: Models.Rectangle } = {};

    get rectangles() {
        return this._rectangles;
    }

    move(id: number, dx: number, dy: number) {
        var target = this.rectangles[id];
        target.move(dx, dy);
    }

    create(x: number, y: number, width: number, height: number) {
        var r = new Models.Rectangle(x, y, width, height);
        this.rectangles[r.id] = r;
    }

    resize(id: number, dx: number, dy: number, width: number, height: number) {
        var target = this.rectangles[id];
        target.move(dx, dy);
        target.resize(width, height);
    }

    __onDispatch(action: any) {
        if (action instanceof Actions.MoveRectangleAction) {
            let a = action as Actions.MoveRectangleAction;
            this.move(a.id, a.dx, a.dy);
            this.__emitChange();
        }
        if (action instanceof Actions.CreateRectangleAction) {
            let a = action as Actions.CreateRectangleAction;
            this.create(a.x, a.y, a.width, a.height);
            this.__emitChange();
        }
        if (action instanceof Actions.ResizeRectangleAction) {
            let a = action as Actions.ResizeRectangleAction;
            this.resize(a.id, a.dx, a.dy, a.width, a.height);
            this.__emitChange();
        }
    }
}

export default new CanvasStore(CanvasAppDispatcher);