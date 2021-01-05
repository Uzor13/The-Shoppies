import React from "react";

//Router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Components
import Header from "./components/ui/Header";
import Nominated from "./components/Nominated";
import Search from "./components/Search";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Provider
import {GlobalProvider} from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Search/>
                    </Route>
                    <Route exact path="/nomination">
                        <Nominated/>
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
