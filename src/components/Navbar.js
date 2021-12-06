import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import NetflixLogo from '../assets/logo3.png'

export default function Navbar(){
const history=useHistory()
function changeNavColor(){
let navbar=document.getElementById('navbar')
window.addEventListener('scroll',()=>{
    if(window.scrollY>150){
        navbar.style.backgroundColor='black'
    }
    else{
        navbar.style.backgroundColor=null
    }
})

}

function showLogout(){
    let avatar=document.getElementById('avatar')
    let logout=document.getElementById('logout')

    avatar.addEventListener('click',()=>{
        if(logout.style.display==='none'){
          return logout.style.display='block'
            
        }else{
            return logout.style.display='none'
        }
    })
}


useEffect(()=>{

    showLogout()
})


useEffect(()=>{
    changeNavColor()
    })


    const handleLogout=()=>{
        localStorage.removeItem('token')
        window.location='/home'
    }

    const Navbar=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 5em;
    position: fixed;
    width: 100%;
    z-index: 23231;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,rgba(0,0,0,.7)),color-stop(10%,rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    background-image: -moz- oldlinear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    background-image: -o-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));

    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    
    `
    const LeftLink=styled.div`
    display: flex;
    align-items: center;
 
    `
    const Logo=styled.img`
    width:92.5px;
    height:25px;
    object-fit: cover;
    cursor: pointer;
    @media(max-width:493px){
        width:85.5px;
    height:20px;
        }
    `
    const Links=styled.div`
       margin-left: 36px;
       @media(max-width:885px){
           /* display: none; */
       }
    `
    const Ul=styled.ul`
    display: flex;
    align-items: center;
    `
    const Li=styled.li`
    margin-right: 22px;
    @media(min-width:885px){
        &:nth-of-type(7){
            display: none;

        }
    }
    @media(max-width:885px){
        &:nth-of-type(1){
            display: none;

        }
        &:nth-of-type(2){
            display: none;

        }
        &:nth-of-type(3){
            display: none;

        }
        &:nth-of-type(4){
            display: none;

        }
        &:nth-of-type(5){
            display: none;

        }
        &:nth-of-type(6){
            display: none;

        }
    
    }
    `
    const Link=styled.a`
    color:white;
    font-size:1.4rem;
    text-transform: capitalize;
    font-weight:bold;
    cursor: pointer;
    `
    const RightIcons=styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media(max-width:500px){
        margin-left: 62px;
    }
    `
    const Avatar=styled.img`
    margin-right:22px
    `

    const Logout=styled.div`
    position: fixed;
    border:.5px solid white;
    right: 40px;
    top:71px;
    z-index: 2;
    background-color: rgba(0,0,0,.4);
    cursor: pointer;
    padding: 0.6em 1em;
    display: none;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    `

    
    const LogoutText=styled.p`
    font-size: 2rem;
    font-weight: bold;
    color:white;
    margin-bottom: 12px;
    &:hover{
        text-decoration: underline;
    }
    `



    return(
        <>
        <Navbar id='navbar'>
            <LeftLink>
                <Logo onClick={()=>history.push('/')} src={NetflixLogo} alt='logo'/>
                <Links>
                    <Ul>
                        <Li><Link to='#'>home</Link></Li>
                        <Li><Link to='#'> series</Link></Li>
                        <Li><Link to='#'> films</Link></Li>
                        <Li><Link to='#'> New & poplular</Link></Li>
                        <Li><Link to='#'> My list</Link></Li>
                        <Li><Link to='#'> watch again</Link></Li>
                        <Li><Link to='#'> browse</Link></Li>
                    </Ul>
                </Links>
            </LeftLink>
            <RightIcons>
            <i class="fas fa-search fa-2x" style={{color:'white',marginRight:'22px'}}></i>
            <i class="fas fa-bell fa-2x" style={{color:'white' ,marginRight:'22px'}}></i>
            <Avatar id='avatar' src='https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41' alt='avatar icon'/>

            </RightIcons>
        </Navbar>
        <Logout id='logout' >
        <LogoutText onClick={handleLogout}>Logout</LogoutText>
        <LogoutText onClick={()=>history.push('/profile')}>Go to profile</LogoutText>
        </Logout>
        </>
    )
}