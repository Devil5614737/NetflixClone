import React,{useEffect,useState} from 'react'
import {GlobalStyle} from './GlobaStyle'
import Intro from './pages/Intro';
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import {Context} from './Context/Context'
import {trendings ,topRated,actionMovies,comedy,horror,  romantic,documentaries} from './api'
import Profile from './pages/Profile';

function App() {


  const[avatar,setAvatar]=useState([])

  const[posters,setPosters]=useState([])
  const [trending, setTrending] = useState([]);
  const [topRateds, setTopRated] = useState([]);
  const [comedies, setComedies] = useState([]);
  const [horrors, setHorrors] = useState([]);
  const [actions, setActions] = useState([]);

  useEffect(() => {
      async function getPosters() {
        const res = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US');
        const data = await res.json();
        setPosters(data.results[Math.floor(Math.random()* data.results.length-1)]);
      }
  getPosters() 
    }, []);
  
  

  
  

  
  useEffect(() => {
      async function getPosters() {
        const res = await fetch(trendings);
        const data = await res.json();
        setTrending(data.results)
      }
  getPosters() 
    }, []);
  
  
    useEffect(() => {
      async function getPosters() {
        const res = await fetch(topRated);
        const data = await res.json();
        setTopRated(data.results)
      }
      getPosters() 
    }, []);
  
    useEffect(() => {
      async function getPosters() {
        const res = await fetch(comedy);
        const data = await res.json();
        setComedies(data.results)
      }
      getPosters() 
    }, []);
  
    useEffect(() => {
      async function getPosters() {
        const res = await fetch(horror);
        const data = await res.json();
        setHorrors(data.results)
      }
      getPosters() 
    }, []);
  
  
    useEffect(() => {
      async function getPosters() {
        const res = await fetch(actionMovies);
        const data = await res.json();
        setActions(data.results)
      }
      getPosters() 
    }, []);

  return (
    <>
    <GlobalStyle/>
      <Switch>
        <Context.Provider value={{avatar,posters,trending,topRateds,comedies,horrors,actions,romantic,documentaries,setAvatar}}>
          <Route path='/' exact> <Intro/></Route>
          <Route path='/login' > <Login/></Route>
          {localStorage.getItem('token') ? <Route path='/home' exact> <Home/></Route> : <Redirect to='/login'/>}
          <Route path='/profile' > <Profile/></Route>
         
        </Context.Provider>
       </Switch>
 </>
  );
}

export default App;
