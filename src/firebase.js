import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDauQt1RYDFty5_-NZWvcUTNMu40iczglM",
    authDomain: "photogram-db408.firebaseapp.com",
    databaseURL: "https://photogram-db408.firebaseio.com",
    projectId: "photogram-db408",
    storageBucket: "photogram-db408.appspot.com",
    messagingSenderId: "350599358228"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const storeDB = firebase.storage(); 