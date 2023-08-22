import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="about-card">
              <img
                className="about-logo"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="About"
              />
              <h1 className="title">About</h1>
            </div>
          ) : (
            <div className="about-card1">
              <img
                className="about-logo"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="About"
              />
              <h1 className="title1">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
