import { useState, useEffect } from "react"

export function TimeSpent() {
    let [timer, setTimer] = useState(0)
    useEffect(() => {
        setTimeout(() => { setTimer(prevTimer=>prevTimer+1) }, 1000)
    })
    
    return (
        <h4>
            You spent {timer} seconds on this website.
        </h4>
    )
}