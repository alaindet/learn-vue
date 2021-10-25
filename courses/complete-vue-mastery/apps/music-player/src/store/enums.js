export const State = {
  ShowAuthModal: 'showAuthModal',
  IsUserLoggedIn: 'isUserLoggedIn',
  CurrentSong: 'currentSong',
  Sound: 'sound',
};

export const Mutation = {
  LogIn: 'logIn',
  LogOut: 'logOut',
  ToggleAuthModal: 'toggleAuthModal',
  StartNewSong: 'startNewSong',
};

export const Action = {
  Register: 'register',
  InitializeLogin: 'initializeLogin',
  LogIn: 'logIn',
  LogOut: 'logOut',
  StartNewSong: 'startNewSong',
};

export default {
  State,
  Action,
  Mutation,
};
