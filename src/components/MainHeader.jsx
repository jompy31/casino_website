import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import VideoSport from '../images/videos/Marcus_Rashford_A.mp4';
import VideoCasino from '../images/videos/Casino_Games_3.mp4';
import VideoHorses from '../images/videos/Horses_1_A.mp4';
import ImageBackground from '../images/games/ruleta-casino-online.jpg';
import Card from "../UI/Card";

const MainHeader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/?redirect=twowager.com');
  }, [navigate]);

  const handleVideoClickCasino = () => {
    navigate('/casino');
  };

  const handleVideoClickSport = () => {
    navigate('/sports');
  };

  const handleVideoClickHorses = () => {
    navigate('/horses');
  };

  
  const handlePickWithUsClick = () => {
    const iframe = document.createElement('iframe');
    const iframeSrc = 'https://www.youwager.lv/join-now?affid=TWOWAGER&source=YouWager%20Join%20Now%20Page&value=JOIN%20NOW';
    
    iframe.src = iframeSrc;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
  
    document.body.appendChild(iframe);
  
    const iframeUrl = 'https://www.youwager.lv/join-now?affid=TWOWAGER&source=YouWager%20Join%20Now%20Page&value=JOIN%20NOW';
    const mainUrl = '/';

    setTimeout(() => {
      window.open(iframeUrl, '_blank');
    }, 4000);

    setTimeout(() => {
      // window.open(iframeUrl, '_blank');
      window.location.href = mainUrl;
    }, 8000);
  };
  

  return (
    <header className="main__header" style={{ backgroundImage: `url(${ImageBackground})`}}>
      <h2>PICK WITH US</h2>
      <div className="container main__header-container">
        {/* first Circle */}
        <div className="subir_20">
          <div className="main__header-container subir_20">  
            <div className="main__header-circle" >
              <video autoPlay loop muted className="main__header-video" onClick={handleVideoClickSport}>
                <source src={VideoSport} type="video/mp4" />
              </video>
            </div>
            
            {/* Second circle */}
            <div className="main__header-circle">
              <video autoPlay loop muted className="main__header-video" onClick={handleVideoClickCasino}>
                <source src={VideoCasino} type="video/mp4" />
              </video>
            </div>

            {/* Third circle */}
            <div className="main__header-circle">
              <video autoPlay loop muted className="main__header-video" onClick={handleVideoClickHorses}>
                <source src={VideoHorses} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="main__header-container btn_link">
        <Link to="/sports" className="btn lg" style={{ textDecoration: 'none' }}>
          Sports
        </Link>
        <Link to="/casino" className="btn lg " style={{ textDecoration: 'none' }}>
          Casino
        </Link>    
        <Link to="/horses" className="btn lg" style={{ textDecoration: 'none' }}>
          Horses
        </Link>
      </div>
      <Card className="testimonial_text_">
      <a onClick={handlePickWithUsClick} style={{ textDecoration: 'none' }}>
          <div> 
            TWOWAGER is a marketing partner of youwager.lv that has online sportsbooks, casinos, poker, and horse betting since 1998. Use promo code 100NEW, which is TWOWAGER's exclusive 100% free play on initial deposits up to $300.
          </div>
        </a>
        <div className="buton_pick" >
          <button className="btn lg" onClick={handlePickWithUsClick}>
            PICK WITH US
          </button>
        </div>
      </Card>
    </header>
  );
};

export default MainHeader;
