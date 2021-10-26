export const State = {
  ShowAuthModal: 'showAuthModal',
  IsUserLoggedIn: 'isUserLoggedIn',
  SongMetadata: 'songMetadata',
  SongInstance: 'songInstance',
  SongDuration: 'songDuration',
  SongSeek: 'songSeek',
};

export const Mutation = {
  LogIn: 'logIn',
  LogOut: 'logOut',
  ToggleAuthModal: 'toggleAuthModal',
  StartNewSong: 'startNewSong',
  PlayOrPauseSong: 'playOrPauseSong',
  UpdateSongProgress: 'updateSongProgress',
};

export const Getter = {
  SongIsPlaying: 'getSongIsPlaying',
};

export const Action = {
  Register: 'register',
  InitializeLogin: 'initializeLogin',
  LogIn: 'logIn',
  LogOut: 'logOut',
  StartNewSong: 'startNewSong',
  PlayOrPauseSong: 'playOrPauseSong',
  UpdateSongProgress: 'updateSongProgress',
};

export default {
  State,
  Mutation,
  Getter,
  Action,
};
