import React, { useState } from 'react'

const HomeComponent = () => {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        if(count <10){
        setCount(count + 1);
        }
    }
    function handleDecrement(){
        if (count > 1){
            setCount(count - 1);
        }
    }
    return (
    <div>
        <h1>count: {count}</h1>
        <button className='btn-wrapper' onClick={handleIncrement}>+</button>
        <button className='btn-wrapper-dec' onClick={handleDecrement}>-</button>
    </div>
    )
}

export default HomeComponent