

const Header = ({title, image, children}) => {
  return (
    <header className="header">
     <div className="header__container">
        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
        <div className="header__container-bg header__container-bg--fixed">
          <img src={image} alt="" />
        </div>
      </div>

    </header>
  )
}

export default Header