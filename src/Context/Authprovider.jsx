import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage, setLocalStorage } from "../Utility/LocalStorage";

const Authprovider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage()
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    }, []);
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
