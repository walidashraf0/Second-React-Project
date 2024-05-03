import React, { useEffect, useState } from 'react'



export default function useNetwork() {


    let [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {
        detectOnline();
    }, [])

    function detectOnline() {
        // Online
        window.addEventListener('online', () => {
            setIsOnline(true);
        });

        // Offline
        window.addEventListener('offline', () => {
            setIsOnline(false);
        });
    }









    return <>
    {!isOnline? <div className='network'> <i className='fas fa-wifi'></i> You are Offline!</div>: ''}
    </>
}
