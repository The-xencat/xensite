import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6zAi12ZLcPTn_OrYDrd9FBWdhck7kmm8",
  authDomain: "xensite-4c0f8.firebaseapp.com",
  projectId: "xensite-4c0f8",
  storageBucket: "xensite-4c0f8.firebasestorage.app",
  messagingSenderId: "356777605262",
  appId: "1:356777605262:web:e903a9137d6f702153f1df",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;