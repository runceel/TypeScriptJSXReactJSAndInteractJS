import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CanvasComposer from './components/CanvasComposer';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <CanvasComposer />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content'));
