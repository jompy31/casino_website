import { useState } from "react";
import { Link } from 'react-router-dom';
import Card from "../UI/Card";
import BannerImage2 from '../images/banner/banner-image-1.JPG';

const Testimonials = () => {
  const [index] = useState(0);
  const bannerImages = [BannerImage2];

  const handlePlayWithUsClick = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youwager.lv/join-now?affid=TWOWAGER&source=YouWager%20Join%20Now%20Page&value=JOIN%20NOW';
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
    }, 0);
  };
  

  return (
    <section className="future_">
      <div>
        <div className="container testimonials__container">
          <Card className="testimonial testimonial_text">
            <a href="#" onClick={handlePlayWithUsClick} style={{ textDecoration: 'none' }}>
              <img src={bannerImages[index]} alt={`Banner ${index}`} />
            </a>
            <button className="btn lg" onClick={handlePlayWithUsClick}>
              PLAY WITH US
            </button>
          </Card>
        </div>

        <div className="container testimonials__container">
          <Card className="testimonial testimonial_text">
            <a href="#" onClick={handlePlayWithUsClick} style={{ textDecoration: 'none' }}>
              <div> 
                TWOWAGER is a marketing partner of twowager.lv that has online sportsbooks, casinos, poker, and horse betting since 1998. Use promo code 100NEW, which is TWOWAGER's exclusive 100% free play on initial deposits up to $300.
              </div>
            </a>
            <button className="btn lg" onClick={handlePlayWithUsClick}>
              PLAY WITH US
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
