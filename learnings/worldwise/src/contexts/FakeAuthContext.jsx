import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuth: true };
    case "logout":
      return { ...state, user: null, isAuth: false };
    default:
      throw new Error();
  }
}

const FAKE_USER = {
  name: "jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({
        type: "login",
        payload: FAKE_USER,
      });
  }
  function logout() {
    dispatch({
      type: "logout",
    });
  }
  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// function useAuth() {
//   const context = useContext(AuthContext);
//   if (AuthContext === undefined)
//     throw new Error("AuthContext was used outside of the provider");
//   return context;
// }

export { AuthProvider, AuthContext };
