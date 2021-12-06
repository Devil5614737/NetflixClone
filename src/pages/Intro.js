import React from 'react'
import styled  from 'styled-components'
import NetflixLogo from '../assets/logo3.png'
import EmailContainer from '../components/EmailContainer'
import Line from '../components/Line'
import Image1 from '../assets/misc/home-tv.jpg'
import Image2 from '../assets/misc/home-mobile.jpg'
import Image3 from '../assets/misc/home-imac.jpg'
import Image4 from '../assets/misc/image.png'
import Bars from '../components/Bars'
import Footer from '../components/Footer'
import { useHistory } from 'react-router'

const Header=styled.header`
width: 100vw;
height: 100vh;
background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
background-size: cover;
background-position: center;
position: relative;
z-index: 1;

&::before{
    content:'';
    position:absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top,rgba(0,0,0,.9) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.9) 100%);
    z-index: -1;
}

`
const TopNav=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2.7rem 5.4rem;
@media(max-width:549px){
    padding: 2.7rem 1.5rem;
}
`
const Logo=styled.img`
width: 133px;
height: 36px;
object-fit: cover;
cursor: pointer;
@media(max-width:949px){
    width: 108px;
height: 32px;
}
@media(max-width:549px){
    width: 88.8px;
height: 24.03333px;
}

`
const Buttons=styled.div`
display: flex;

`
const Button=styled.div`
cursor: pointer;
font-size: 1.7rem;
font-weight: 500;
text-transform: capitalize;
margin-right: 22px;
padding: .4em .7em;
background-color:  ${(props) => (props.bgdark ? "rgba(0,0,0,.5)" : "#e50914")};
color: white;
@media(max-width:549px){
    padding: .4em .7em;
    font-size: 1.3rem;
}
`


const TitleContainer=styled.div`
color:#fff;
display: block;
margin: auto;
/* width: 640px; */
margin-top: 122px;
@media(max-width:949px){
    
    margin-top: 32px;
}

`


const Top=styled.h3`
font-size: 5rem;
font-weight: bold;
text-align: center;
@media(max-width:549px){
    font-size: 3rem;
    line-height: 1.3;
}
`
const Middle=styled.h5`
font-size: 2.625rem;
text-align: center;
line-height: 1.9;
@media(max-width:949px){
    line-height: 1;
}
`
const Bottom=styled.p`
font-size: 1.925rem;
text-align: center;
line-height: 3;
color:white;
@media(max-width:949px){
    line-height: 2;
}
`
const Econtainer=styled.div`
display: flex;
justify-content: center;
/* flex-direction: column; */
@media(max-width:949px){
    flex-direction: column;
    align-items: center;
}
@media(max-width:452px){
/* padding:0 2rem ; */
/* display: none; */
}

`

const Section2=styled.section`
`
const Container=styled.div`
color:#fff;
display: flex;
align-items: center;
/* justify-content: space-between; */
/* width: 1200px; */


padding:6rem 14rem;
/* flex-direction: column; */
@media(max-width:949px){
    flex-direction: column;
 
}

`
const Headings=styled.div`
/* line-height: 2; */
/* margin-left: 52px;   */
`

const First=styled.h5`
font-size: 5rem;
margin-bottom: 22px;
@media(max-width:949px){
    font-size: 4rem;
    text-align: center;
}

`
const Second=styled.p`
font-size: 2.6rem;
@media(max-width:949px){
    font-size: 1.6rem;
    text-align: center;
}
`
const TvImage=styled.img`
width: 530px;
height: 337px;
object-fit: contain;
`
const Section3=styled.section`
margin-top: 78px;
margin-bottom: 82px;
`

const Heading=styled.h3`
color:#fff;
text-transform: capitalize;
font-size: 5rem;
text-align: center;
`
const BarContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 42px auto;
flex-direction: column;

`

const FooterContainer=styled.div`
display: block;
margin:22px auto;
max-width: 1000px;
padding-top: 9rem;
transform: translateX(61px);
`

function Intro() {
    const history=useHistory()

    return (
        <>
        <Header>
            <TopNav>
                <Logo src={NetflixLogo}/>
                <Buttons>
                    <Button bgdark textwhite >
                        English
                    </Button>
                    <Button onClick={()=>history.push('/login')}>Sign In</Button>
                </Buttons>
            </TopNav>
            <TitleContainer>
                <Top>Unlimited movies, TV <br/> shows and more.</Top>
                <Middle>Watch anywhere. Cancel anytime.</Middle>
                <Bottom>Ready to watch? Enter your email to create or restart your membership.</Bottom>
                <Econtainer>   <EmailContainer/></Econtainer>
             
            </TitleContainer>
            
        </Header>
        <Line/>
        <Section2>
            <Container>
                <Headings>
                    <First>Enjoy on your TV.</First>
                    <Second>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Second>
                </Headings>
                <TvImage src={Image1} alt='image of a tv'/>
            </Container>
        <Line/>
        <Container>
                <TvImage src={Image2} alt='image of a tv'/>
                <Headings>
                    <First>Download your shows to watch offline.</First>
                    <Second>Save your favourites easily and always have something to watch.</Second>
                </Headings>
            </Container>
            <Line/>
        <Container>
                <Headings>
                    <First>Watch everywhere.</First>
                    <Second>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Second>
                </Headings>
                <TvImage src={Image3} alt='image of a tv'/>
            </Container>
            <Line/>
        <Container>
                <TvImage src={Image4} alt='image of a tv'/>
                <Headings>
                    <First>Create profiles for children.</First>
                    <Second>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</Second>
                </Headings>
            </Container>
            <Line/>
        </Section2>
        <Section3>
            <Heading>Frequently Asked Questions</Heading>
            <BarContainer>
            <Bars title='What is Netflix?' content='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' icon='fas fa-plus fa-2x'/>
            <Bars title='Where can I watch?' content='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' icon='fas fa-plus fa-2x'/>
            <Bars title='How do I cancel?' content='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' icon='fas fa-plus fa-2x'/>
            <Bars title='What can I watch on Netflix?' content='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' icon='fas fa-plus fa-2x'/>
            <Bars title='Is Netflix good for kids?' content='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' icon='fas fa-plus fa-2x'/>
         
            
            </BarContainer>
            <Bottom>Ready to watch? Enter your email to create or restart your membership.</Bottom>
            <Econtainer>   <EmailContainer/></Econtainer>
        </Section3>
        <Line/>
        <FooterContainer><Footer/></FooterContainer>
        </>
    )
}

export default Intro
