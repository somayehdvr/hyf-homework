import { useContext } from "react"
import {AppContext} from "./App"

export default function H1Title() {
    const title = useContext(AppContext)
    return (
        <h1>
            {title}
        </h1>
    )
}