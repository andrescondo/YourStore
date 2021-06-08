import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Landing from '../containers/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
