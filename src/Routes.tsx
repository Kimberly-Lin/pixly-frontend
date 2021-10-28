import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import Home from "./Home";

/** Routing for components for each URL
 * 
 * Props: none
 * State: none
 * 
 * App -> Routes > {ImageUpload, Home}
 */
function Routes() {
    
    return (
        <Switch>
            <Route exact path="/upload">
                <ImageUpload/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;