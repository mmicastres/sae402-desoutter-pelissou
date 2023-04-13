import React from "react"

export const UserContext = React.createContext({pseudo: '', admin: '0'});

// import React, { createContext, useState } from 'react';

// export const UserContext = createContext({pseudo :'', admin : ''});

// export const UserProvider = ({ children }) => {
//   const [isUserconnected, setIsUserconnected] = useState(false);

//   const UserenticateUser = () => {
//     setIsUserconnected(true);
//   }

//   const unUserenticateUser = () => {
//     setIsUserconnected(false);
//   }

//   return (
//     <UserContext.Provider value={{ isUserconnected, UserenticateUser, unUserenticateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };