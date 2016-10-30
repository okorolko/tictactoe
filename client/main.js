import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import {Router, Route, browserHistory} from 'react-router'
import App from './components/App'
import WaitContainer from './containers/WaitContainer'
import HomeContainer from './containers/HomeContainer'

const store = configureStore();

render(
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route path='/' component={HomeContainer}/>
    <Route path='/wait' component={WaitContainer}/>
    <Route path='/game' component={App}/>
    <Route path='/:room' component={App}/>
    </Router>
    </Provider>, document.getElementById('app')
)
