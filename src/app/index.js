import React from "react";
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from "./components/App";

const saveUserData = (state = {
  user: {}
}, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      state = {
          ...state,
          user: action.payload
      };
      break;
  }
  return state;
};

const store = createStore(saveUserData);

store.subscribe( () => {
  console.log(state.getState());
});

render(
    <Provider store={store}><App /></Provider>
    , window.document.getElementById('app'));