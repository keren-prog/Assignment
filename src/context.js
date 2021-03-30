import React, {createContext, useContext} from 'react';

const MyContext= createContext();

const MyProvider=(props) => {
    
    function sub (x,y) {
        return x-y
    }

    return (
        <MyContext.Provider value={{sub}}>
            {props.children}
        </MyContext.Provider>
    )
}
const useMyContext = () => useContext(MyContext)
export{
    useMyContext,MyProvider
};