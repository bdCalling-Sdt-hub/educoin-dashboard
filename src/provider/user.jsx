import React, { useContext, useEffect, useState } from 'react';
import { useProfileQuery } from '../redux/slices/authSlice';
export  const UserContext = React.createContext(null);

export const useUser= ()=>{
    return useContext(UserContext)
}

export const UserProvider = (props)=>{
    const { data:profile } = useProfileQuery({});
    const [user, setUser] = useState(null);

    useEffect(()=>{
        if(profile){
            setUser(profile);
        }
    }, [profile])


    return(
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}