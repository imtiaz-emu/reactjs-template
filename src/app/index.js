import {createStore, combineReducers} from 'redux';

const reducer1 = (state = {
  counter: 0,
  name: 'Emu'
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        counter: state.counter + action.payload
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        counter: state.counter - action.payload
      };
      break;
  }
  return state;
};

const reducer2 = (state = {
  age: 19,
  name: 'Emu'
}, action) => {
  switch (action.type) {
    case "AGE_SETUP":
      state = {
        ...state,
        age: action.payload
      };
      break;
    case "NAME_UPDATE":
      state = {
        ...state,
        name: action.payload
      };
      break;
  }
  return state;
};


const store = createStore(combineReducers({reducer1, reducer2}));

store.subscribe(() => {
  console.log("Updated Store: ", store.getState())
});

store.dispatch({
  type: "ADD",
  payload: 4
});

store.dispatch({
  type: "SUBTRACT",
  payload: 1
});

store.dispatch({
  type: "AGE_SETUP",
  payload: 40
});

store.dispatch({
  type: "NAME_UPDATE",
  payload: "Abdul"
});