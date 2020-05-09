import React, { Fragment } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store/index.js';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App sun">
        <Provider store={store}>
          <Fragment>
            <Header />
            <BrowserRouter>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/detail' component={Detail}></Route>
            </BrowserRouter>
          </Fragment>
        </Provider>
    </div>
  );
}

export default App;
