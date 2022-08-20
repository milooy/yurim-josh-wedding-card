import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import { uuid } from './common';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'fir-51aad.firebaseapp.com',
  databaseURL: 'https://fir-51aad.firebaseio.com',
  projectId: 'fir-51aad',
  storageBucket: 'fir-51aad.appspot.com',
  messagingSenderId: '540093913106',
  appId: '1:540093913106:web:d225b528e0f76e7aaaa0cb',
};

function createComment({
  username,
  contents,
}: {
  username: string;
  contents: string;
}) {
  const db = getDatabase();
  set(ref(db, 'users/' + uuid()), {
    username,
    contents,
    date: new Date().getTime(),
  });
}

export interface Comment {
  username: string;
  contents: string;
  date: Date;
}

function fetchCommentList(): Promise<Comment[]> {
  const dbRef = ref(getDatabase());

  return new Promise((resolve, reject) => {
    get(child(dbRef, `users`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const arr = snapshot.val();
          const comments = Object.keys(snapshot.val())
            .map(value => arr[value])
            .sort((a, b) => b.date - a.date);
          resolve(comments);
        } else {
          resolve([]);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

const app = initializeApp(firebaseConfig);

export { createComment, fetchCommentList };
