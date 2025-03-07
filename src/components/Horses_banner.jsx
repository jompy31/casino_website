import { useState } from "react";
import { Link } from 'react-router-dom';
import Card from "../UI/Card";
import BannerImage2 from '../images/horses/banner.jpg';

const Testimonials = () => {
  const [index] = useState(0);
  const bannerImages = [BannerImage2];

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
    <section className="future">
      <div>
        <div className="container testimonials__container">
          <Card className="testimonial testimonial_text">
            <a href="#" onClick={handlePickWithUsClick} style={{ textDecoration: 'none' }}>
              <img src={bannerImages[index]} alt={`Banner ${index}`} />
            </a>
            <button className="btn lg" onClick={handlePickWithUsClick}>
              PICK WITH US
            </button>
          </Card>
        </div>

        <div className="container testimonials__container">
          <Card className="testimonial testimonial_text">
            <a href="#" onClick={handlePickWithUsClick} style={{ textDecoration: 'none' }}>
              <div>
                TWOWAGER is a marketing partner of twowager.lv that has online sportsbooks, casinos, poker, and horse betting since 1998. Use promo code 100NEW, which is TWOWAGER's exclusive 100% free play on initial deposits up to $300.
              </div>
            </a>
            <button className="btn lg" onClick={handlePickWithUsClick}>
              PICK WITH US
            </button>
          </Card>
        </div>

        <div className="container future__container">
          <Card className="testimonial testimonial_text">
            <a href="#" onClick={handlePickWithUsClick} style={{ textDecoration: 'none' }}>
              <div>
                Follow us on Instagram for winning picks, superior lines, and live betting opportunities to enhance your horse racing experience.
              </div>
            </a>
        <Link to="https://www.instagram.com/two_wager/"  target="_blank" className="btn lg"  style={{ textDecoration: 'none' }}>
        INSTAPICKS
        </Link>
        </Card>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
