import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "upload-firebase-85c7d",
  storageBucket: "upload-firebase-85c7d.appspot.com",
  messagingSenderId: "627885555500",
  appId: "1:627885555500:web:0817ce4484440b7d56b689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cung cấp cơ chế phân quyền cho toàn bộ ứng dụng
export const auth = getAuth(app);

// Tạo store dùng chung cho toàn bộ ứng dụng
export const storage = getStorage(app);

// Cung cấp cơ chế đăng nhập với Google
export const googleProvider = new GoogleAuthProvider();
