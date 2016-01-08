import * as Actions from './Actions';
import CanvasAppDispatcher from '../dispatchers/CanvasAppDispatcher';

class CanvasActionCreators {
    move(id: number, dx: number, dy: number) {
        CanvasAppDispatcher.dispatch(
            new Actions.MoveRectangleAction(
                id,
                dx,
                dy));
    }

    create(centerX: number, centerY: number) {
        CanvasAppDispatcher.dispatch(
            new Actions.CreateRectangleAction(
                centerX - 50,
                centerY - 50,
                100,
                100));
    }

    resize(id: number, dx: number, dy: number, width: number, height: number) {
        CanvasAppDispatcher.dispatch(
            new Actions.ResizeRectangleAction(
                id,
                dx,
                dy,
                width,
                height));
    }
}

export default new CanvasActionCreators();