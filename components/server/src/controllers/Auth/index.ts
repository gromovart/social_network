import Auth from './authUser';
import SignInUser from './signInUser';
import SignUpUser from './signUpUser';
import SignOutUser from './signOutUser';

type TAuth = {
  authUser: () => Promise<any>;
  signInUser: () => Promise<any>;
  signUpUser: () => Promise<any>;
  signOutUser: () => Promise<any>;
};

export default <TAuth>{
  [Auth.controllerName]: Auth.authUser,
  [SignInUser.controllerName]: SignInUser.signInUser,
  [SignUpUser.controllerName]: SignUpUser.signUpUser,
  [SignOutUser.controllerName]: SignOutUser.signOutUser,
};
