import React, { useContext, useEffect } from 'react';
import Style from './Profile.module.css';
import { jwtDecode } from 'jwt-decode';
import { UserToken } from '../../Context/UserToken';


export default function Profile() {

    let { userData } = useContext(UserToken)
    
    // useEffect(()=> {
    //     let encodedToken = localStorage.getItem('userToken')
    //     let decodedToken = jwtDecode(encodedToken)
    // }, [])

    return <>
    <h2>Profile</h2>
    <h3>Hello {userData?.name}!</h3>
    <h3>Hello {userData?.email}!</h3>
    </>
}
