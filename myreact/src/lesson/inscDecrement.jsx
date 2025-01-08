import React, { useState } from 'react'
import { Bgimg, Button, Container, NavbarContainer } from './style';
import { Link } from 'react-router-dom';

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
        <Link to={"/"} style={{textDecoration: "none"}}>
        <div className='men'>Home</div>
        </Link>
        <Link to={"/about"} style={{textDecoration: "none", color:"blue"}}>
        <div>About</div>
        </Link>
        <Link to={"/menu"} style={{textDecoration: "none"}}>
        <div>Menu</div>
        </Link>
        <div>Pages</div>
        <div>Contact</div>
    </NavbarContainer>
    </Container>
    )
}

export default HomeComponent