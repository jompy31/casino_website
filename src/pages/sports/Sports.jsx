import Header from '../../components/Header'
import HeaderImage from '../../images/sports/maxres_1.jpg'
import React from 'react';
import './sports.css'
import Testimonials from '../../components/Testimonials'



const Sport = () => {
  return (
    <>
      <Header title="SPORTS" image={HeaderImage}  className="header" >
      </Header>
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
      <Testimonials/>
      <br/>
    </>
  );
}

export default Sport;