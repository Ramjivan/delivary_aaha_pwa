import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyBT3TPnDW3Rju7pwLNRiVx70B9rpUmOrTw",
    authDomain: "aahapizza-89d38.firebaseapp.com",
    projectId: "aahapizza-89d38",
    messagingSenderId: "496935331710",
    appId: "1:496935331710:web:828d7ae64b15c9b396752f",
    measurementId: "G-P36MFBQHY0",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () => {
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });
}