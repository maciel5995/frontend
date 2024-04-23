import { useState } from "react"

export default function MyButtonComponent() {
    const [count, setCount] = useState(0)
    const addCount = () => setCount(v => v + 1)
    // const addCount = () => setCount(count + 1)

    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Clicou {count} vezes</button> */}
            <button onClick={addCount}>Clicou {count} vezes</button>
        </div>
    )
}