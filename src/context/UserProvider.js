import { createContext, useContext, useState } from "react";

const UserBioData = createContext();

const UserProvider = ({ children }) => {
  const [userValue, setUserValue] = useState();
  return (
    <UserBioData.Provider value={{ userValue, setUserValue }}>
      {children}
    </UserBioData.Provider>
  );
};

export const userData = () => useContext(UserBioData);

export default UserProvider;
