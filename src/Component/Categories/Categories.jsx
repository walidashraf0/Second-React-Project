import React, { useEffect, useMemo, useRef, useState } from 'react';
import Style from './Categories.module.css';


export default function Categories() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    let checkCount2Even = useMemo(()=> {
        console.log("Check Even Counter");
        return counter2%2 === 0;
    }, [counter2]);

    function increment1() {
        setCounter1(counter1+1);
    }

    function increment2() {
        setCounter2(counter2+1)
    }

    // Before UseMemo
    // function checkCount2Even() {
    //     console.log("Check Even Counter");
    //     return counter2%2 === 0;
    // }


    
    return <>
    <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
                <h1>Counter1</h1>
                <h6>{counter1}</h6>
                <button onClick={()=> increment1()} className='btn btn-info'>+</button>
            </div>
            <div className="col-md-6">
                <h1>Counter2</h1>
                <h6>{counter2}</h6>
                <h5>{checkCount2Even? "Even": "Odd"}</h5>
                <button onClick={()=> increment2()} className='btn btn-info'>+</button>
            </div>
        </div>
    </div>
    
    </>
}
