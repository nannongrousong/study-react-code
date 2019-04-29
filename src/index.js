import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

const classComp = React.createElement(
    class extends Component {
        state = {
            showText: 'level4-p2'
        }

        handleClick = () => {
            this.setState({
                showText: 'level4-p2' + new Date().getTime()
            });
        }

        render() {
            return React.createElement('div', {
                className: 'level1',
                key: 'level1'
            }, [
                    React.createElement('button', { key: 'level2-btn', className: 'level2-btn', onClick: this.handleClick }, 'BUTTON'),
                    React.createElement('div', { key: 'level2-div1', className: 'level2-div1' },
                        React.createElement('div', { key: 'level3-div', className: 'level3-div' }, [
                            React.createElement('p', { key: 'level4-p1', className: 'level4-p1' }, 'level4-p1'),
                            //  React.createElement('p', { key: 'level4-p2', className: 'level4-p2' }, 'level4-p2'),
                            React.createElement('p', { key: 'level4-p2', className: 'level4-p2' }, this.state.showText),
                        ])
                    ),
                    React.createElement('div', { key: 'level2-div2', className: 'level2-div2' },
                        React.createElement('p', { key: 'level3-p', className: 'level3-p' }, 'level3-p'),
                    ),
                ]
            );
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