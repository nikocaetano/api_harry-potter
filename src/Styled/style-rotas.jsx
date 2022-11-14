import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Menu = styled(Link)`
text-decoration:none;
color:white;
`

export const Li = styled.li`
list-style:none;
font-family: 'Harry Potter';
font-size: 1.6em;
background-color: black;
width: 18vw;
text-align:center;
border-radius: 12px;
cursor:pointer;
&:hover{ 
    transform:scale(105%);
    transition: ease-in-out 0.3s;
}
`

export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
padding-top:25px;
`