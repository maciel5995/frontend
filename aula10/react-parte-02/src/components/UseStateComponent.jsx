import { useState } from "react"

function UseStateComponent(){
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);

    const increaseValue1 = () => setValue1(value1 + 1);
    const dereaseValue1 = () => setValue1(value1 - 1);
    const increaseValue2 = () => setValue2(value2 + 1);
    const dereaseValue2 = () => setValue2(value2 - 1);

    return (
        <>
        <hr />
        <p>{value1}</p>
        <button onClick={dereaseValue1}>-</button>
        <button onClick={increaseValue1}>+</button>
        <hr />
        <p>{value2}</p>
        <button onClick={dereaseValue2}>-</button>
        <button onClick={increaseValue2}>+</button>
        <p>Resultado: {value1} * {value2} = {value1 * value2}</p>        
        </>
    )
}

export default UseStateComponent