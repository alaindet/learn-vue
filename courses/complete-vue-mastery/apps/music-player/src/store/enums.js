export const State = {
  ShowAuthModal: 'showAuthModal',
  IsUserLoggedIn: 'isUserLoggedIn',
  SongMetadata: 'songMetadata',
  SongInstance: 'songInstance',
  SongDuration: 'songDuration',
  SongSeek: 'songSeek',
  SongPercentageProgress: 'songPercentageProgress',
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
  SongUrl: 'getSongUrl',
  IsSong: 'getIsSong',
};

export const Action = {
  Register: 'register',
  InitializeLogin: 'initializeLogin',
  LogIn: 'logIn',
  LogOut: 'logOut',
  StartNewSong: 'startNewSong',
  PlayOrPauseSong: 'playOrPauseSong',
  UpdateSongProgress: 'updateSongProgress',
  MoveSeek: 'moveSeek',
};

export default {
  State,
  Mutation,
  Getter,
  Action,
};
