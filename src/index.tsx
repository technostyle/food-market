import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const initialState: any = {};

const reducer = combineReducers({
  cart: (state: any = initialState) => state,
});
const store = createStore(reducer, initialState);

class App extends React.Component<any, any> {
  componentDidMount() {
    fetch('http://localhost:3000/test');
  }

  render() {
    return  (<h1>Hello, World!</h1>);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
