import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import {ShowIncrement} from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementPadre = useCallback(
      (value) => {
        setCounter((c) => c + value);
      },
      [],
    )
    

    // const incrementPadre = () => {
    //     setCounter(counter + 1);
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
        <ShowIncrement 
            increment={incrementPadre}
        />

    </>
  )
}
