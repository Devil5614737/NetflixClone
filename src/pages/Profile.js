import React, { useState } from 'react'
import styled ,{keyframes}from 'styled-components'
import NetflixLogo from '../assets/logo3.png'
import {useHistory} from 'react-router-dom';

function Profile() {
    const history=useHistory()
    const[show,setShow]=useState(false)

const Container=styled.div`
padding: 2em 4em;
`

const Logo=styled.img`
width: 166px;
height: 45px;
object-fit: contain;
@media(max-width:739px){
 
    width: 75px;
    height: 32px;
    
}

`
const ProfileContainer=styled.div`
margin-top: 52px;
/* align-items: center; */
/* flex-direction: column; */
`
const Title=styled.h3`
color:white;
font-weight: bold;
font-size: 3.5rem;
margin-bottom: 42px;
text-align: center;
`
const Profiles=styled.div`
display: flex;
justify-content: center;
width: 100%;
`
const Avatar=styled.img`
width: 10%;
height: 10%;
object-fit: cover;
cursor: pointer;
position: relative;
z-index: 12;
`


const spin=keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const Spinner=styled.div`
&:before{
    content:'';
    box-sizing:border-box;
    position: absolute;
    top: 31%;
    left: 41%;
    height: 230px;
    width: 230px;
    margin-top: -30px;
    margin-left: -3px;
    border-radius: 50%;
    border-top: 9px solid red;
    border-right: 5px solid transparent;
    animation:${spin} .7s linear infinite;

}
@media(max-width:781px){
    &:before{
    content:'';

    top: 31%;
    left: 35%;
    height: 200px;
    width: 200px;
   
}
}
@media(max-width:641px){
    &:before{
    content:'';

    top: 31%;
    left: 37%;
    height: 180px;
    width: 180px;
   
}
}
@media(max-width:575px){
    &:before{
    content:'';

    top: 33%;
    left: 37%;
    height: 150px;
    width: 150px;
   
}
}
@media(max-width:459px){
    &:before{
    content:'';

    top: 33%;
    left: 37%;
    height: 130px;
    width: 130px;
   
}
}
`


const handleClick=()=>{
setShow(true)
setInterval(()=>{
history.push('/home')
},1000)
}
    return (
        <>
        <Container>
        <Logo src={NetflixLogo} alt='netflix logo'/>
        <ProfileContainer>
            <Title>Who's watching?</Title>
            <Profiles>
             <Avatar onClick={handleClick} src='https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ0wfG3ZeXThgr51o3IENS0QBAk82NUT838Tm-5LoXq5_JNMrBptW22Rb7NuUZka-_O-e7mxIc4QVP0EJsC6EEsj2uTS.png?r=f1d' alt='avatar'/>
            </Profiles>
        </ProfileContainer>
        </Container>
   {show&&<Spinner/>}
        </>
    )
}

export default Profile
