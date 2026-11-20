import { Children, createContext,useContext, useState } from "react";
const AuthContext= createContext();
export function AuthProvider({children}){
    const[user,setUser]=useState(()=>{
        const saveUser=localStorage.getItem('user');
        return saveUser?JSON.parse(saveUser):null;
    });


    const login=(data)=>{
     localStorage.setItem('token',data.token);
     const userInfo={
        fullname:data.fullname,
        role:data.role
     };
     localStorage.setItem('user',JSON.stringify(userInfo));
    };
    
    const logout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    }
    return(
      <AuthContext.Provider value={{user,login,logout}}>
        {children}
      </AuthContext.Provider>
    );

}

export const useAuth=()=>useContext(AuthContext);
