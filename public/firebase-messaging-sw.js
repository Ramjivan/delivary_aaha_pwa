importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBT3TPnDW3Rju7pwLNRiVx70B9rpUmOrTw",
    authDomain: "aahapizza-89d38.firebaseapp.com",
    projectId: "aahapizza-89d38",
    messagingSenderId: "496935331710",
    appId: "1:496935331710:web:828d7ae64b15c9b396752f",
    measurementId: "G-P36MFBQHY0",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };
    try {
        var audio = new Audio('./ios_notification.mp3');
        audio.play();
    } catch(e) {console.log(e)}
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
