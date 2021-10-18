import firebase from 'firebase/app';
import 'firebase/auth';

// TODO: Move to .env?
const firebaseConfig = {
  apiKey: 'AIzaSyCmEEQAu5EZWVNeZAa23fZZYYBSNEqRHjE',
  authDomain: 'music-player-f4ea3.firebaseapp.com',
  projectId: 'music-player-f4ea3',
  storageBucket: 'music-player-f4ea3.appspot.com',
  appId: '1:680248712197:web:8b7baa221fe18b9f40106c',
};

firebase.initializeApp(firebaseConfig);
