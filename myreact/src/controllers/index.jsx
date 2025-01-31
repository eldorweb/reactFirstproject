import React, { useState } from 'react'
import { Container,dataList } from '../lesson/caravan'
import styled from 'styled-components';
import BasicMap from '../map/map';
import Vhmenu from './vhmenu';

const Controllers = () => {
    const [active, setActive] = useState(true);
    const handleVMenu=()=>{
        setActive(false)
    }
    const handleHMenu=()=>{
        setActive(true)
    }
    return (
    <HVmenu>
    <div className='btn_wrapper'>
        <button onClick={handleHMenu}>HMenu</button>
        <button onClick={handleVMenu}>VMenu</button>
    </div>

        {
            active? <BasicMap/>: <Vhmenu/>
                }
        
    </HVmenu>
    )
}

export default Controllers


const HVmenu = styled.div`
width: 80vw;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;
.btn_wrapper{
    display: flex;
    margin-bottom: 30px;
    gap: 20px;
    button{
    background-color: #fff000;
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    }
    button:hover, button:focus{
        outline: 0;
    background: #f4e603;
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);    
    }
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    .grid_card{
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        padding: 20px;
    }
}
`