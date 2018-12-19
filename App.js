import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Navigator from './src/Navigator';
import Store from './src/store';

const store = Store();

const App = ({ dispatch, nav, addListener }) => (
  <Navigator navigation={{dispatch,state: nav, addListener}} />
);

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigation onNavigationStateChange={null} />
  </Provider>
);
