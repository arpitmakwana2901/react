import React from "react";
import { auth, authProvider } from "./configure/firebase";
import { signInWithPopup } from "firebase/auth/web-extension";

const App = () => {
  function handleAuth() {
    signInWithPopup(auth, authProvider).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <button onClick={handleAuth}>Google</button>
    </div>
  );
};

export default App;
