import React from 'react'
import styled from 'styled-components'
import Icon from '../assets/chevronforward.svg'

const Input=styled.input`
display: block;
width: 45rem;
height: 6rem;
font-size: 1.7rem;
padding-left: 8px;
&:focus{
    outline: none;
}
@media(max-width:739px){
    height: 4.5rem;
}
@media(max-width:452px){
    width: 42rem;
}
@media(max-width:422px){
    width: 37rem;
}
`

const Button=styled.div`
width: 214px;
height: 6rem;
background-color: #e20813;
padding:1em;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    background-color: red;
}
@media(max-width:949px){
    margin-top:12px;
    width: 154px;
height: 4rem;
}

`
const Title=styled.p`
font-size: 2.6rem;
text-align: center;
color:white;
@media(max-width:949px){
    font-size: 1.8rem;
}

`

const Chevron=styled.img`
display: flex;
align-items: center;
`


function EmailContainer() {
    return (
        <>
        <Input placeholder='Email address'/>
        <Button>
            <Title>Get 
                Started</Title>
              <Chevron src={Icon} alt='chevron icon'/>
        </Button>
        </>
    )
}

export default EmailContainer
