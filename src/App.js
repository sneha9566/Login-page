import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Pages";
import Orders from "./components/Pages/Orders";
import { store } from "./helpers";
import { Provider } from "react-redux";
import rootSaga from './saga';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from './reducers';
// import rootReducer from "./reducers";

const wrapperDashboard = Wrapper(Dashboard);
const wrapperOrders = Wrapper(Orders);


// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware, logger),
// );
// sagaMiddleware.run(rootSaga);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={wrapperDashboard} />
            <Route exact path="/order" component={wrapperOrders} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
