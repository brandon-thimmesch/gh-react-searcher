import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlankMain from './BlankMain';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={BlankMain}/>
        </Switch>
    </main>
)

export default Main;
