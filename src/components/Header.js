

export default function Header(){
    return (
      <>
          <nav>
            <ul>
              <li><a href="#about">עליי</a></li>
              <li><a href="#services">שירותים</a></li>
              <li><a href="#gallery">גלריה</a></li>
              <li><a href="#testimonials">המלצות</a></li>
              <li><a href="#contact">צרו קשר</a></li>
            </ul>
          </nav>
        <header>
          <div className="hero">
          <div>
            <h1>לילוש צור</h1>
            <p>מלווה אתכם מההתחלה ועד ההגעה ליד. <br/>בלי פשרות ומיקוד בהתמדה</p>
          </div>
          <div className="image-div">
            <img className="hero-img" src='/images/hero.png' alt="leelush personal trainer"/>
          </div>
          </div>
        </header>
      </>
      );
}