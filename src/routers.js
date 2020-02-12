import React from 'react'
import {Switch, Route} from 'react-router-dom'
import OpenMap from './openMap/OpenMap';

const Routes = () => (
    <Switch>
        <Route path="/" component={OpenMap}/>
    </Switch>
)

export default Routes;