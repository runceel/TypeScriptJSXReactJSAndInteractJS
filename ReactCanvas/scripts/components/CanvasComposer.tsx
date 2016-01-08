import * as React from 'react';
import * as Models from '../stores/Models';
import RectangleComponent from './RectangleComponent';
import CanvasStore from '../stores/CanvasStore';
import CanvasActionCreators from '../actions/CanvasActionCreators';

interface CanvasComposerProps extends React.Props<{}> {
}

interface CanvasComposerState {
    rectangles: Models.Rectangle[];
}

export default class CanvasComposer extends React.Component<CanvasComposerProps, CanvasComposerState> {
    private canvasStoreSubscription: { remove: Function; };

    constructor(props: CanvasComposerProps) {
        super(props);
        this.state = this.getStateFromStore();
    }

    private getStateFromStore(): CanvasComposerState {
        var rs: Models.Rectangle[] = [];
        for (var key in CanvasStore.rectangles) {
            rs.push(CanvasStore.rectangles[key]);
        }
        return {
            rectangles: rs
        };
    }

    private onChange() {
        this.setState(this.getStateFromStore());
    }

    private handleMouseDown(e: React.MouseEvent) {
        CanvasActionCreators.create(e.clientX, e.clientY);
    }

    componentDidMount() {
        this.canvasStoreSubscription = CanvasStore.addListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        this.canvasStoreSubscription.remove();
    }

    render() {
        var rects = this.state.rectangles.map(x => <RectangleComponent key={x.id} rectangle={x} />);
        return (
            <div 
                style={{ width: '500px', height: '500px', backgroundColor: 'lightgray' }}
                onMouseDown={this.handleMouseDown.bind(this)}>
                {rects}
            </div>
        );
    }
}