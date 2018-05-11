import React from "react";
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from "./components/App";

const saveUserData = (state = {
  currentUser: {},
  display_errors: false,
  errors: []
}, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      state = {
          ...state,
          user: action.payload
      };
     case "DISPLAY_LOGIN_ERRORS":
      state = {
          ...state,
          errors: action.payload,
          display_errors: true
      };
     default:
      return state;
  }
};

const store = createStore(saveUserData);

store.subscribe( () => {
  console.log(state.getState());
});

render(
    <Provider store={store}><App /></Provider>
    , window.document.getElementById('app'));