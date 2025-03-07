import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import Card from '../UI/Card.jsx'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
import {promotions} from '../data';


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Promotions"/>
        
          <div className="programs__wrapper">
          {
            promotions.map(({id, title, description, linkText, image}) => {
              return (
                <Card className="programs__program" key={id}>
                  <img src={image} alt={title} />
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <Link to="https://www.youwager.lv/join-now?affid=TWOWAGER&source=YouWager%20Join%20Now%20Page&value=JOIN%20NOW" className="btn sm">{linkText} <AiFillCaretRight/></Link>
                </Card>
              )
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Programs