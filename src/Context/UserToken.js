import { createContext, useState } from "react";

export let UserToken = createContext()

export default function UserTokenProvider(props) {

    const [userToken, setUserToken] = useState(null)

    return <UserToken.Provider value={{userToken, setUserToken}}>
        {props.children}
    </UserToken.Provider>



}
