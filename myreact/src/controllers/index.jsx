import React, { useState } from 'react'

const Controllers = () => {
    const [active, setActive] = useState(true);
    const handleVMenu=()=>{
        setActive(false)
    }
    const handleHMenu=()=>{
        setActive(true)
    }
    return (
    <div>
        <button onClick={handleHMenu}>HMenu</button>
        <button onClick={handleVMenu}>VMenu</button>
        {
            active? <p>HMenu</p>: <p>VMenu</p>
        }
        
        
    </div>
    )
}

export default Controllers