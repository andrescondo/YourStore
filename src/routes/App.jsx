import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout'; //contenedor del Header y Footer
import Landing from '../containers/Landing'; //pantalla principal
import Login from '../containers/Login'; //pantalla del iniciar sesión
import SignUp from '../containers/SignUp'; //pantalla del registro
import Home from '../containers/Home'; //pantalla de home una vez logeado

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home}>
            {/* <Route exact path="/home/product" component={Product}/> */}
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
