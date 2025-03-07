import { Link } from 'react-router-dom';
import Card from "../UI/Card";


const Future = () => {


  return (
    <section className="future_">
      <div>
      <div className="container future__container">
        <Card className="testimonial testimonial_text">
        <a href="https://www.youwager.lv/join-now?affid=TWOWAGER&source=YouWager%20Join%20Now%20Page&value=JOIN%20NOW" style={{ textDecoration: 'none' }}>
        <div> 
        Follow us on instagram for winning picks, superior lines and live betting opportunities to enhance your sports watching experience.
        </div>
        </a>
        <Link to="https://www.instagram.com/two_wager/" className="btn lg"  style={{ textDecoration: 'none' }}>
        INSTAPICKS
        </Link>
        </Card>
        </div>
      </div>
    </section>
  )
}

export default Future;
