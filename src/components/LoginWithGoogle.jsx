import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../firebase/firebase.config";

export default function LoginWithGoogle() {
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => console.log(response.user.displayName))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <img
        height={70}
        width={70}
        style={{ objectFit: "cover" }}
        onClick={loginWithGoogle}
        src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
        alt=""
      />
    </div>
  );
}
