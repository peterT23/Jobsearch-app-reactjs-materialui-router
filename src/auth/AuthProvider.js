import React from "react";
import { fakeAuthProvider } from "./fakeAuthProvider";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signIn = (newUser, callback) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  let signOut = (callback) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
