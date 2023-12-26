import React from "react";
import { useContext, useState } from "react";
import MainContext from "./MainContext";


const MainProvider = ({ children }) => {
        const [state, setState] = useState([])
         return (
                <MainContext.Provider value={{state,setState}}>
                                   {children}
                </MainContext.Provider>
            );
            
       
    
}

export default MainProvider;