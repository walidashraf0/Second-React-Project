import { createContext, useState } from "react";

export let UserToken = createContext()

export default function UserTokenProvider(props) {

    const [userToken, setUserToken] = useState(null)
    const [userData, setUserData] = useState(null)

    return <UserToken.Provider value={{userToken, setUserToken, setUserData, userData}}>
        {props.children}
    </UserToken.Provider>



}
