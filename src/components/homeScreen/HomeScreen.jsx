import React from 'react';
import './HomeScreen.css';
import Nav from '../navbar/Nav';
import Banner from '../banner/Banner';
import requests from '../../Requests';
import Row from '../row/Row';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row  
      title='NETFLIX ORIGINALS'
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row  
      title='Top Rated'
      fetchUrl={requests.fetchTopRated}/>
      <Row  
      title='Action Movies'
      fetchUrl={requests.fetchActionMovies}/>
      <Row  
      title='Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}/>
      <Row  
      title='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row  
      title='Romance Movies'
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row  
      title='Documentaries'
      fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default HomeScreen;
