import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBuyTfw7jt9tlxzuTNKiHWYMAHkvIG8H4A",
	authDomain: "edtech-757a9.firebaseapp.com",
	projectId: "edtech-757a9",
	storageBucket: "edtech-757a9.appspot.com",
	messagingSenderId: "772394263680",
	appId: "1:772394263680:web:2a7650fbbb56308f29b265",
	measurementId: "G-103485YX3F",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };