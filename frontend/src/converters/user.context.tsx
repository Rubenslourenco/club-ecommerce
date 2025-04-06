import { createContext, FunctionComponent, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  isAuthenticated: false,
});

const UserContextProvider: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser] = useState(null);

  const isAuthenticated = currentUser !== null;

  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
