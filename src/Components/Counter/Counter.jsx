import { useState } from "react"
import { Info } from "./Info"

export const Counter = () => {
    const [value, setValue] = useState(0)
    return(
        <>
            <button onClick={() => {setValue(value + 1)}} type="button">Increment</button>
            <button onClick={() => {setValue(value - 1)}} type="button">Decrement</button>
            <Info value={value} />
        </>
    )
}