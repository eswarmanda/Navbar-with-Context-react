import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickChangeTheme = () => {
        toggleTheme()
      }
      const navEleClass = isDarkTheme ? 'nav-bar-ele-dark' : 'nav-bar-ele'
      return (
        <nav className={navEleClass}>
          <Link to="/">
            {isDarkTheme ? (
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>

          <ul className="ul-link">
            <Link className="Link-ele" to="/">
              {isDarkTheme ? (
                <li className="li1">Home</li>
              ) : (
                <li className="li2">Home</li>
              )}
            </Link>

            <Link className="Link-ele" to="/about">
              {isDarkTheme ? (
                <li className="li1">About</li>
              ) : (
                <li className="li2">About</li>
              )}
            </Link>
          </ul>
          {isDarkTheme ? (
            <img
              className="theme-logo"
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              onClick={onClickChangeTheme}
            />
          ) : (
            <img
              className="theme-logo"
              data-testid="theme"
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              onClick={onClickChangeTheme}
            />
          )}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
