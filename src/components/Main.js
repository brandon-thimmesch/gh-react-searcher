import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlankMain from './BlankMain';

const Main = () => (
    <main>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Options side for filtering.</p>
                </div>

                <div className="col">
                <Switch>
                    <Route exact path='/' component={BlankMain}/>
                </Switch>
                </div>
            </div>
        </div>
    </main>
)

export default Main;
