import ActionTypes from '../action.types';

class LoginComponentState {
  static displayErrors(errors) {
    return {
      type: ActionTypes.DISPLAY_LOGIN_ERRORS,
      payload: errors
    };
  }

  static reduce(previousState, action) {
    let newState = Object.assign({}, previousState);

    switch (action.type) {
      case ActionTypes.DISPLAY_LOGIN_ERRORS:
        if (action.payload && action.payload.length) {
          newState.errors = action.payload;
          newState.shouldDisplayError = true;
        } else {
          newState.errors = [];
          newState.shouldDisplayError = false;
        }

        return newState;

      default:
        return previousState || {};
    }
  }
}

export default LoginComponentState;
