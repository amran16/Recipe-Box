import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import RecipeApp from './components/RecipeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
registerServiceWorker();
