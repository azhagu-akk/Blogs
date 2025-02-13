/* eslint-disable react/prop-types */


import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        const res = await axios
          .get(URL + "/api/auth/refetch", { withCredentials: true })
          // .then((response) => {
          //   localStorage.setItem("token", response.data.token); // Store token
          //   console.log("Login successful!");
          // })
          // .catch((error) => console.error("Login failed:", error));
        // console.log(res.data)
        setUser(res.data)

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>)
}