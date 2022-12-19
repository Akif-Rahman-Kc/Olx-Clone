import React,{ createContext, useState } from "react";

export const PostContext = createContext(null)

export default function Post ({children}) {
    const [postDetails,setPostDetails] = useState()
    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}