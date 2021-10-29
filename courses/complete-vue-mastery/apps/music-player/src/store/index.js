import { createStore } from 'vuex';

import modules from './modules';

export default createStore({
  modules,
});

// import auth from './modules/auth';
// import player from './modules/player';

// export default createStore({
//   modules: {
//     auth,
//     player,
//   },
// });
