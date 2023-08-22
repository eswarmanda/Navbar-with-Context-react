import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-card">
              <img
                className="not-found-logo"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="title-p">Lost Your Way?</h1>
              <p className="title1-p1">
                We cannot seem to find the page you are locking for.
              </p>
            </div>
          ) : (
            <div className="not-found-card1">
              <img
                className="not-found-logo"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="title-p2">Lost Your Way?</h1>
              <p className="title1-p2">
                We cannot seem to find the page you are locking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
