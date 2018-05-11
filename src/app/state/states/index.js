import UserState from './user';
import LoginComponentState from './login.component';

export default {
  user: UserState.reduce,
  loginComponent: LoginComponentState.reduce
};
