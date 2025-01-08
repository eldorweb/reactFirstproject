import React, { useState } from 'react'
import { Bgimg, Button, Container, NavbarContainer } from '../style/style';

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
    <Container>
        <Bgimg>
        <h1>count: {count}</h1>
        </Bgimg>
        <Button  onClick={handleIncrement}>+</Button>
        <Button $minus onClick={handleDecrement}>-</Button>
    <NavbarContainer>
        <div className='men'>Home</div>
        <div>About</div>
        <div>Menu</div>
        <div>Pages</div>
        <div>Contact</div>
    </NavbarContainer>
    </Container>
    )
}

export default HomeComponent