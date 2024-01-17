import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAnlZBZVBCGFPeEvDnP4eZkt4XVR-0LSx8',
  authDomain: 'os-cria-cria.firebaseapp.com',
  projectId: 'os-cria-cria',
  storageBucket: 'os-cria-cria.appspot.com',
  messagingSenderId: '813605485977',
  appId: '1:813605485977:web:9eebddfc1907e45a096708',
  measurementId: 'G-X156LTCC3G',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
