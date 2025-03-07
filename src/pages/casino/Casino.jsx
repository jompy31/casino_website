import Header from '../../components/Header'
import HeaderImage from '../../images/videos/casino.JPG';
import React from 'react';
import './casino.css';
import Casino from '../../components/Casino';
// import Casino_image from '../../images/videos/casino.JPG';


const CasinoPage = () => {
  return (
    <>
      <Header image={HeaderImage}  className="header" >
      </Header>
      <Casino />
      <br/>
    </>
  );
};

export default CasinoPage;
