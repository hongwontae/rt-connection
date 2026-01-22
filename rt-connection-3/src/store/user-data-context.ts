import {createContext} from 'react';

export type UserType = {
    name : string;
    age : number;
}

export type UserContextType = {
    user : UserType,
    setName : (name : string)=>void;
    setAge : (age : number)=>void
}

export const UserContext = createContext<UserContextType | null>(null);