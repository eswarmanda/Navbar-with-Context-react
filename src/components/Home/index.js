import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-card">
              <img
                className="home-logo"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="Home"
              />
              <h1 className="title">Home</h1>
            </div>
          ) : (
            <div className="home-card1">
              <img
                className="home-logo"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="Home"
              />
              <h1 className="title1">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
