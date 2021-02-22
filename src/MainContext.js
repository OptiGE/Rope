import React, {useState, createContext} from 'react';

export const MainContext = createContext();

export const MainProvider = props => {
    const hour = {}
    const slots = [[slot1, slot2],[],[],[]]
    
  
    const[slots, setSlots] = useState();

    return(
        <MainContext.Provider value={[name, setName]}>
            {props.children}
        </MainContext.Provider>
    );
}