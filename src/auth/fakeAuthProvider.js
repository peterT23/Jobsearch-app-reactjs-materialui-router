const fakeAuthProvider = {
  isAuthenticated: false,
  signIn: (callback) => {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signOut: (callback) => {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
