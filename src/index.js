import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

const classComp = React.createElement(
    class extends Component {
        render() {
            return 'this is a class component';
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);

const funcComp = React.createElement(() => {
    return 'this is a function component';
}, {
        className: 'funcComp', key: 'funcComp'
    }
);

const divComp = React.createElement('div', {
    className: 'divComp', key: 'divComp'
}, 'this is a div component')

ReactDOM.render(classComp, document.getElementById('app'));

module.hot && module.hot.accept();