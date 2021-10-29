export const State = {
  SongMetadata: 'songMetadata',
  SongInstance: 'songInstance',
  SongDuration: 'songDuration',
  SongSeek: 'songSeek',
  SongPercentageProgress: 'songPercentageProgress',
};

export const Getter = {
  SongIsPlaying: 'getSongIsPlaying',
  SongUrl: 'getSongUrl',
  IsSong: 'getIsSong',
};

export const Mutation = {
  StartNewSong: 'startNewSong',
  PlayOrPauseSong: 'playOrPauseSong',
  UpdateSongProgress: 'updateSongProgress',
};

export const Action = {
  StartNewSong: 'startNewSong',
  PlayOrPauseSong: 'playOrPauseSong',
  UpdateSongProgress: 'updateSongProgress',
  MoveSeek: 'moveSeek',
};

export default {
  State,
  Getter,
  Mutation,
  Action,
};
