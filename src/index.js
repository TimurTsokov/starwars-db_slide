import React from 'react';
import ReactDOM from 'react-dom';
// import Slider from './Slider/slider'
import App from '../src/Components/app'
import * as serviceWorker from './serviceWorker';
import './index.scss'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

