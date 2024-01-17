import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLbLimmcn0lfyn0tNlK-yM8mBvwaP1Ifs',
  authDomain: 'os-cria-cria-10e5c.firebaseapp.com',
  projectId: 'os-cria-cria-10e5c',
  storageBucket: 'os-cria-cria-10e5c.appspot.com',
  messagingSenderId: '427687269581',
  appId: '1:427687269581:web:47e43eb4321425001e8584',
  measurementId: 'G-ELB4DHD1SV',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { firebase, db }
