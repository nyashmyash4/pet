import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)
    const handleInc = () => {
        setCount(count + 1)
    }
    const handleDec = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={handleDec} className={classes.btn}>
                dec
            </button>
            <button onClick={handleInc} className={classes.btn}>
                inc
            </button>
            <div>{count}</div>
        </div>
    )
}
