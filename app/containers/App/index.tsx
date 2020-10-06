/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { MainPage } from 'containers/MainPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/features" component={FeaturePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
export default hot(App);
