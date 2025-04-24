import { useState } from "react"

function MyButtomComponent(){
    const [counter, setCounter] = useState(0);

    const addCounterOnClick = () => setCounter(counter + 1);

    return (
        <button onClick={addCounterOnClick}>Clicou {counter} vezes</button>
    )
}

export default MyButtomComponent