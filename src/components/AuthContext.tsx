import { createContext, useContext } from "react";

export type GlobalContent = {
  isLoggedIn: boolean;
  setIsLoggedIn: (c: boolean) => void;
  handleLogout: () => void;
};
export const AuthContext = createContext<GlobalContent>({
  isLoggedIn: false, // set a default value
  setIsLoggedIn: (_value: boolean) => {},
  handleLogout: () => {},
});
export const useAuthContext = () => useContext(AuthContext);
