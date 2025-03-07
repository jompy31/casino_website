
import Image from '../images/games/casino.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {games} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
            <div className="values__image" style={{width: '80%'}}>
                    <img src={Image} alt="Values_Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Featured games"/>
                <br/><br/>

                <div className="values__wrapper">
                    {
games.map(({id, title, description, linkText, image}) => {
    return (
      <Card className="programs__program" key={id}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to={linkText} className="btn sm">Play Now <AiFillCaretRight/></Link>
      </Card>
    )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values