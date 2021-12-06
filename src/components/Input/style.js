import styled from "styled-components";



export const Input=styled.input`
width: 31.4rem;
height: 5rem;
background-color: #333333;
border: none;
border-radius: 5px;
margin-bottom: 18px;
color: white;
padding-left: .8rem;
font-size: 1.8rem;
&:focus{
    outline: none;
    background-color: #111;
}
@media(max-width:739px){
    width: 100%;
    height: 5rem;
}

`