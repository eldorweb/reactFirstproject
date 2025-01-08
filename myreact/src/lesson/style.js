import styled from "styled-components";
// import bgimg from "../allpages/img/jpg/events.png"

export  const Container = styled.div`
    border: 1px solid black;
    background-color: green;
`

export const Button = styled.button`
background-color: ${(prop) => (prop.$minus ? "bisque" : "white")};
padding: ${(prop => prop.$minus ? "20px 30px" : "20px 40px")};
color: black;
`

export const Bgimg = styled.div`
background-image: url(${bgimg});
height: 300px;
`
export const NavbarContainer = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
div{
    cursor: pointer;
}
div:hover{
    background-color: beige;
}
.men{
    color: red;
}
`