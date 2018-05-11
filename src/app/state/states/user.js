import ActionTypes from '../action.types';

class UserState {
  static update(user) {
    return {
      type: ActionTypes.UPDATE_USER,
      payload: user
    };
  }

  static reduce(previousState, action) {
    let newState = Object.assign({}, previousState);

    switch (action.type) {
      case ActionTypes.UPDATE_USER:
        newState.user = action.payload;
        return newState;

      default:
        return previousState || {};
    }
  }
}

export default UserState;
