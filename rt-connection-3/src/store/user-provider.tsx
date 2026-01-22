import {useState, type PropsWithChildren} from 'react';
import {UserContext, type UserType} from './user-data-context';

export function UserProvider({children} : PropsWithChildren){

    const [user, setUser] = useState<UserType>({name : "", age : 0});

    function setName(name : string){
        setUser(prev=>({...prev, name}));
    }

    function setAge(age : number){
        setUser(prev=>({...prev, age}));
    }

    return (
        <UserContext.Provider value={{user, setAge, setName}}>
            {children}
        </UserContext.Provider>
    )

 

}