"use client"
import React, { createContext, useState, ReactNode } from "react";

interface MyContextProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const  MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}: MyContextProviderProps) => {
  const [isLogin, setIsLogin] = useState(false);



  return <MyContext.Provider value={{isLogin,setIsLogin}}>{children}</MyContext.Provider>;
};
