import React, { Component, Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';

/*
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
*/

const funcComp = React.createElement(() => {
    return 'this is a function component';
}, {
        className: 'funcComp', key: 'funcComp'
    }
);

const divComp = React.createElement('div', {
    className: 'divComp', key: 'divComp'
}, 'this is a div component');

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            btnCount: 3,
            number: 1
        }

        handleClick1 = () => {
            this.setState({
                number: this.state.number + 1
            });
        }

        handleClick2 = () => {
            this.setState({
                btnCount: this.state.btnCount + 1
            });
        }

        render() {
            return (
                <div key='wrapper'>
                    <button key='add-number' onClick={this.handleClick1}>加数字</button>
                    <button key='add-btn' onClick={this.handleClick2}>加按钮</button>
                    {
                        Array(this.state.btnCount).fill().map((v, i) => (
                            <div key={'btn' + i}>第{i + 1}个按钮，值{this.state.number}</div>
                        ))
                    }
                </div>
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);
*/

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            number: 1
        }

        handleClick1 = () => {
            this.setState({
                number: this.state.number + 1
            });
        }

        render() {
            return (
                <div key='wrapper'>
                    <button key='add-number' onClick={this.handleClick1}>加数字</button>

                    {
                        this.state.number % 2 === 0
                        ? <div key='even-wrapper'>这是偶数显示的内容<h1>偶数</h1></div>
                        : <div key='odd-wrapper'>这是奇数显示的内容<h2>奇数</h2></div>
                    }
                </div>
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);
*/


const createID = () => (+ new Date());
const classComp = React.createElement(
    class extends Component {
        state = {
            array: [{ id: 'user1', name: '王大' }, { id: 'user2', name: '赵二' }, { id: 'user3', name: '张三' }, { id: 'user4', name: '李四' }]
        }

        handleClick = (e) => {
            let { array } = this.state;
            let id = createID();
            const type = typeof e === 'string' ? e : e.target.dataset.type;

            switch (type) {
                case 'change-order':
                    let delItem = array.splice(1, 1);
                    array.splice(2, 0, delItem[0]);
                    break;
                case 'head-add':
                    array.unshift({ id: 'user-head-add' + id, name: '头部添加用户' + id })
                    break;
                case 'tail-add':
                    array.push({ id: 'user-tail-add' + id, name: '尾部添加用户' + id })
                    break;
                case 'mid-add':
                    array.splice(1, 0, { id: 'user-mid-add' + id, name: '中间添加用户' + id });
                    break;
                case 'head-del':
                    array.shift();
                    break;
                case 'tail-del':
                    array.pop();
                    break;
                case 'mid-del':
                    array.splice(1, 1);
                    break;
                default:
                    break;
            }

            this.setState({
                array
            });
        }

        render() {
            const { array } = this.state;
            const btnList = [{
                type: 'change-order',
                name: '数组总数不变，只是交换顺序'
            }, {
                type: 'head-add',
                name: '数组总数变了，头部添加一个'
            }, {
                type: 'tail-add',
                name: '数组总数变了，尾部添加一个'
            }, {
                type: 'mid-add',
                name: '数组总数变了，中间添加一个'
            }, {
                type: 'head-del',
                name: '数组总数变了，头部删除一个'
            }, {
                type: 'tail-del',
                name: '数组总数变了，尾部删除一个'
            }, {
                type: 'mid-del',
                name: '数组总数变了，中间删除一个'
            }]

            return (
                <div key='wrapper'>
                    {
                        btnList.map(({ type, name }, i) => (
                            <button
                                key={type}
                                data-type={type}
                                onClick={this.handleClick}
                                //  onClick={this.handleClick.bind(this, type)}
                            >
                                {name}
                            </button>
                        ))
                    }

                    {
                        array.map(({ id, name }, i) => (
                            <div key={id}>年龄：{name}</div>
                        ))
                    }
                </div>
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            number: 1
        }

        handleAdd = () => {
            this.setState({
                number: this.state.number + 1
            });
        }

        handleClick1 = () => {
            console.log('我是偶数');
        }

        handleClick2 = () => {
            console.log('我是奇数');
        }

        render() {
            const { number } = this.state;

            return (
                <Fragment>
                    <button onClick={this.handleAdd}>加数字</button>
                    <span>{number}</span>
                    <button onClick={number % 2 === 0 ? this.handleClick1 : this.handleClick2}>点击</button>
                </Fragment>
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);
*/
ReactDOM.render(classComp, document.getElementById('app'));

module.hot && module.hot.accept();