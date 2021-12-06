import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Context } from "../Context/Context";
import Background2 from "../assets/background.jpg";
import Footer from "../components/Footer";
import MovieRows from "../components/MovieRows";
import LargeMovies from "../components/LargeMovies";
import MovieInfo2 from "../components/MovieInfo";
import ReactPlayer from "react-player/youtube";

const Header = styled.header`
  position: relative;
  transition: all 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(
      13deg,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 85%
    );
    background: -moz-
      oldlinear-gradient(13deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%);
    background: -o-linear-gradient(
      13deg,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 85%
    );
    background: linear-gradient(
      77deg,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 85%
    );
    z-index: 1;
    position: absolute;
  }
`;
const Background = styled.img`
  width: 100%;
  background-position: center center;
  background-size: cover;
`;
const MovieInfo = styled.div`
  color: white;
  position: absolute;
  margin-top: 15%;
  margin-left: 52px;

  width: 50%;

  z-index: 2;
  @media (max-width: 529px) {
    margin-top: 1%;
  }
`;
const Title = styled.h3`
  font-size: 6rem;
  font-weight: bold;

  @media (max-width: 989px) {
    font-size: 5rem;
  }
  @media (max-width: 871px) {
    font-size: 3rem;
  }
`;
const Description = styled.p`
  font-size: 2.2rem;
  @media (max-width: 989px) {
    font-size: 1.7rem;
  }
  @media (max-width: 871px) {
    font-size: 1.4rem;
  }
`;
const Buttons = styled.div`
  margin-top: 12px;
  display: flex;
`;
const Button = styled.div`
  /* padding: 2px; */
  margin-right: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 38px;
  background-color: white;
  border-radius: 4px;
  @media (max-width: 989px) {
    width: 95px;
    height: 30px;
  }
  @media (max-width: 871px) {
    width: 85px;
    height: 25px;
  }
`;
const BtnTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: black;
  @media (max-width: 989px) {
    font-size: 1.3rem;
  }
  @media (max-width: 871px) {
    font-size: 1.2rem;
  }
`;

const MovieRowsContainer = styled.div`
  /* margin-top: -182px; */
  margin-left: 42px;
`;

const FooterContainer = styled.div`
  display: block;
  margin: 22px auto;
  max-width: 1000px;
  padding-top: 9rem;
  transform: translateX(61px);
`;
const MovieModalContainer = styled.div`
  /* position: absolute;
top:50%;

z-index: 12;
display: flex;
justify-content: center;
width: 100%;
align-items: center; */
`;

export default function Home() {
  let [video, setVideo] = useState("unset");
  const { posters, trending, topRateds, comedies, horrors, actions } =
    useContext(Context);
  let trendingShorted = trending.slice(0, 4);
  let trendingShorted2 = trending.slice(0, 6);

  let topRatedShorted = topRateds.slice(0, 6);
  let comediesShorted = comedies.slice(0, 6);
  let horrorShorted = horrors.slice(0, 6);

  let newShorted = actions.slice(0, 6);

  const imageLink = "https://image.tmdb.org/t/p/original";


  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  let desc = truncate(posters.overview, 220);

  function handlevidoe() {
    setInterval(() => {
      setVideo("none");
    }, 6000);
  }

  handlevidoe();

  return (
    <>
      <Header>
        <Navbar />
        <ReactPlayer
          loop={true}
          url="https://youtu.be/Hs-1_HNALhw?t=1"
          width="100vw"
          height="100vh"
          playing="true"
          style={{ position: "absolute", display: video }}
          wrapper={Header}
          muted={true}
        />
        <MovieInfo>
          <Title>
            {posters.orignal_title || posters.title || "Movie Title"}
          </Title>
          <Description>{desc}</Description>
          <Buttons>
            <Button>
              <BtnTitle>Play</BtnTitle>
            </Button>
            <Button>
              <BtnTitle>More Info</BtnTitle>
            </Button>
          </Buttons>
        </MovieInfo>
        <Background
          src={imageLink + posters.backdrop_path || Background2}
          alt="background"
        />
      </Header>
      <MovieRowsContainer>
        <MovieRows data={newShorted} title="Only on Netflix" />
        <MovieRows data={topRatedShorted} title="Top Rated" />

        <LargeMovies data={trendingShorted} title="Trendings" />
        <MovieRows data={horrorShorted} title="Horrors" />
        <MovieRows data={comediesShorted} title="Comedies" />
        <MovieRows data={trendingShorted2} title="Actions" />
      </MovieRowsContainer>
      <MovieModalContainer>
        <MovieInfo2 />
      </MovieModalContainer> 
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
