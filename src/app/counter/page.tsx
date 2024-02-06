"use client"

import {useReducer, useState} from 'react';

export default function Counter() {
    const [number, setNumber] = useState(10)
    const countReducer = (oldCount: number, action: any) => {
        if (action.type === 'DOWN') {
            return oldCount - action.number
        } else if (action.type === 'RESET') {
            return 0;
        } else {
            return oldCount + action.number
        }
    }
    const [counter, counterDispatch] = useReducer(countReducer, 0)
    const down = () => {
        counterDispatch({type: 'DOWN', number: number})
    }
    const reset = () => {
        counterDispatch({type: 'RESET', number: number})
    }
    const up = () => {
        counterDispatch({type: 'UP', number: number})
    }
    const changeNumber = (e: any) => {
        setNumber(Number(e.target.value))
    }
    return (
        <>
            <div>
                <input type="button" value="-" onClick={down}/>
                <input type="button" value="reset" onClick={reset}/>
                <input type="button" value="+" onClick={up}/>
                <input type="text" value={number} onChange={changeNumber}/>
                <div>{counter}</div>
                counter..
            </div>
        </>
    );
}
