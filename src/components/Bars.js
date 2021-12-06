import React, { useEffect } from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: #303030;
  color: white;
  display: flex;
  padding: 2rem;
  width: 65%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const Title = styled.h5`
  font-size: 2.6rem;
  @media(max-width:686px){
  font-size: 2rem;
}
`;

const Content=styled.div`
margin-top: 2px;
width: 65%;
 color:white;
 background-color: #303030;
 padding: 2rem;
 display: none;
 margin-bottom: 12px;
`
const Text=styled.p`
font-size: 2.6rem;
@media(max-width:686px){
  font-size: 2rem;
}

`
function Bars({title,content,icon,...props}) {

function showHide(){

    const btn=document.getElementById('btn')
    const content=document.getElementById('content')
  btn.addEventListener('click',()=>{
       if(content.style.display==='none'){
           content.style.display='block'
       }else{
           content.style.display='none';
       }
    })
}
useEffect(()=>{

    showHide()
})
  return (
    <>
      <Bar {...props}>
        <Title>{title}</Title>
        <i id='btn' class={icon} style={{ cursor: "pointer" }}></i>
      </Bar>
      <Content id='content'>
        <Text>
         {content}
        </Text>
      </Content>
    </>
  );
}

export default Bars;
