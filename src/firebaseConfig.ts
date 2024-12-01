import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2JOyxBv9yGxud7-3LvX6l5po-IgoPUq8",
    authDomain: "furevermatch-d84bd.firebaseapp.com",
    projectId: "furevermatch-d84bd",
    storageBucket: "furevermatch-d84bd.firebasestorage.app",
    messagingSenderId: "354707257678",
    appId: "1:354707257678:web:7a1a8b9f93dced8f74461f",
    measurementId: "G-RY245W1RR1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
