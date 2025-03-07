import Header from '../../components/Header'
import HeaderImage from '../../images/horses/horses.jpg'
import React from 'react';
import './horses.css'
import Future from '../../components/future_Horses'
import Horses from '../../components/Horses_banner'



const Sport = () => {
  return (
    <>
      <Header title="Horses" image={HeaderImage}  className="header">
      </Header>
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
      <Horses/>
      <br/>
    </>
  );
}

export default Sport;