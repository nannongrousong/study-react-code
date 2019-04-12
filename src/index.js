import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>123</div>, document.getElementById('app'));

module.hot && module.hot.accept();