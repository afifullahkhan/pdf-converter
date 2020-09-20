import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "../screens/main/main"


const RouteApp=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Main}></Route>
            </Switch>
        </Router>
    )
}

export default RouteApp;