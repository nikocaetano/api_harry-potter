import styled from "styled-components";


export const Section = styled.section`
display:flex;
position: relative;
left: 10vw;
top: 5vw;
flex-wrap:wrap;
width:80%;
justify-content:space-evenly;
height:200vh;
`


export const Image = styled.img`
width: 20vw;
height:26vw;
border-radius: 20px;
border:solid 1px;
`

export const Name = styled.p`
color:white;
list-style:none;
text-align:center;
font-family: 'Parselto' ;
font-size: 1.4em;
background-color: black;
width: 20vw;
border-radius: 12px;
`

export const Text = styled.p`
text-align: center;
font-family: 'Parselto' ;
font-size: 1.2em;
`

export const Caixa = styled.div`
height: 65vh;
width: 23vw;
display: flex;
flex-direction: column;
align-items:center;
justify-content:space-evenly;
cursor:pointer;

.box{
    color: transparent;    
}

&:hover{      
    .box{
        display:initial;
        color:white;
        font-size: 1.1em;
        transform:scale(105%);
        transition: ease-in-out 0.5s;
        text-align:center;
    }
}
`
