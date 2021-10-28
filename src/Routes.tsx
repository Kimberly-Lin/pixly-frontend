import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import Home from "./Home";
import AllImages from "./AllImages";
import ImagePage from "./ImagePage";

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
            <Route exact path="/all">
                <AllImages />
            </Route>
            <Route exact path="/image/:id">
                <ImagePage />
            </Route>
            <Route exact path="/upload">
                <ImageUpload />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;