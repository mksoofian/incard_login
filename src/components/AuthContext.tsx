import { createContext, useContext } from "react";

export type GlobalContent = {
  isLoggedIn: boolean;
  setIsLoggedIn: (c: boolean) => void;
};
export const AuthContext = createContext<GlobalContent>({
  isLoggedIn: false, // set a default value
  setIsLoggedIn: (_value: boolean) => {},
});
export const useAuthContext = () => useContext(AuthContext);
