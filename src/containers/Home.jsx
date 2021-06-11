import React from 'react';
import { Link, Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';

import '../styles/components/Home.css';

import HomeProduct from '../components/HomeProduct';
import HomeStore from '../components/HomeStore';

const Home = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="Home">
      <h2>Hola, Patrick</h2>

      <div className="Home-container">
        <nav className="Home-nav">
          <li>
            <Link to={`${url}/product`}>Producto</Link>
          </li>
          <li>
            <Link to={`${url}/store`}>Bodega</Link>
          </li>
        </nav>
        <div className="Home-box">
          <Switch>
            <Route path={`${path}/product`}>
              <HomeProduct />
            </Route>
            <Route path={`${path}/store`}>
              <HomeStore />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
