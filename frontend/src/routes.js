import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/about';

export default props => (

    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect path='*' to='/todos'/>
        </Switch>
        
    </BrowserRouter>

    
);