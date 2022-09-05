import { useReducer } from "react";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";

export const AuthProvider = (children) => {
  initialState = {
    logged: false,
  };

  useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider>
      {children}
      {/* Context */}
    </AuthContext.Provider>
  );
};
