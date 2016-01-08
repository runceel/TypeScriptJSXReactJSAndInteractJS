import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Models from '../stores/Models';
import * as Interact from 'interact.js';
import CanvasActionCreators from '../actions/CanvasActionCreators';

interface RectangleComponentProps extends React.Props<{}> {
    rectangle: Models.Rectangle;
}

interface RectangleComponentState {
}

export default class RectangleComponent extends
    React.Component<RectangleComponentProps, RectangleComponentState> {
    
    constructor(props: RectangleComponentProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Interact(ReactDOM.findDOMNode(this) as HTMLElement)
            .draggable({
                inertia: true,
                restrict: {
                    restriction: 'parent',
                    endOnly: true,
                    elementRect: { top: 1, left: 1, bottom: 1, right: 1 }
                },
                autoScroll: true,
                onmove: e => {
                    CanvasActionCreators.move(
                        this.props.rectangle.id,
                        e.dx,
                        e.dy);
                }
            })
            .resizable({
                preserveAspectRatio: false,
                edges: { left: true, right: true, bottom: true, top: true },
                onmove: e => {
                    CanvasActionCreators.resize(
                        this.props.rectangle.id,
                        e.deltaRect.left,
                        e.deltaRect.top,
                        e.rect.width,
                        e.rect.height);
                }
            });
    }

    render() {
        var r = this.props.rectangle;
        var style: React.CSSProperties = {
            backgroundColor: 'blue',
            width: r.width,
            height: r.height,
            top: r.y,
            left: r.x,
            position: 'absolute'
        };
        return (
            <div style={style}>
            </div>
        );
    }
}