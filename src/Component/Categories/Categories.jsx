import React, { useEffect, useRef, useState } from 'react';
import Style from './Categories.module.css';


export default function Categories() {

    const [counter, setCounter] = useState(0);

    let render = useRef(0);
    let myInput = useRef();

    useEffect(()=> {
        render.current +=1;
        myInput.current.focus();
    }, [])


    
    return <>
    <h2>Categories</h2>
    <h3>Counter: {counter}</h3>
    <h3>Render: {render.current}</h3>
    <input ref={myInput} />
    <button onClick={()=> setCounter(counter+1)} className='btn m-2 btn-info text-white'>+</button>
    <button onClick={()=> setCounter(counter-1)} className='btn m-2 btn-info text-white'>-</button>
    </>
}
