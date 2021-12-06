import React from 'react'
import styled from 'styled-components'



const Icon=styled.div`
/* display: none; */
font-size: 1.4rem;
transform: translateY(1px);
`


const MovieTitle=styled.h4`
color:white;
font-size: 1.4vw;
font-weight: 600;
display: flex;
align-items: center;
cursor: pointer;
&:hover > ${Icon}{
    display: block;
    margin-left: 22px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) all .7s;
}

`
const MovieRow=styled.div`
 display: flex; 
 flex-wrap: wrap;
justify-content: space-between;
padding-right:2em;
padding-top: 1em;
/* width: 100%; */
margin-bottom: 42px; 
/* overflow: hidden; */
`

const Movie=styled.img`
height: 90%;
width: 24%;
object-fit: contain;
margin-right: 1%;
cursor: pointer;
&:hover{
    transform: scale(1.1);
    transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
`

function LargeMovies({data,title}) {

    const imageLink = "https://image.tmdb.org/t/p/original";

    return (
        <>
         <MovieTitle>{title}
        <Icon><i class="fas fa-chevron-right"></i></Icon>
             </MovieTitle>
         <MovieRow>
      {data.map(data=><Movie src={imageLink+data.backdrop_path} alt='movie poster image'/>)}
   
     
  
      </MovieRow>   
        </>
    )
}

export default LargeMovies;
