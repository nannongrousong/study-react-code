import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

class Comp extends Component {
    render() {
        return <div>1234</div>;
    }
}

const comp = React.createElement(Comp, { className: 'comp', fontSize: 18, key: 'comp' });

ReactDOM.render(comp, document.getElementById('app'));

module.hot && module.hot.accept();