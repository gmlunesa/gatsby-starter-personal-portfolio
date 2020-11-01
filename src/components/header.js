import { Link } from "gatsby"
import React from "react"

// import Toggler from "./toggler"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
// import config from '../../../config';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: "",
    }
  }

  toggleMenu = value => {
    this.setState({ openMenu: value })
  }

  render() {
    const { openMenu, visibilityClass } = this.state
    return (
      <StaticQuery
        query={graphql`
          query headerLandingTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <nav
              id="header"
              className={`navbar navbar-expand-lg ${visibilityClass}`}
            >
              <div className="container">
                <Link className="navbar-brand" to="/">
                  {data.site.siteMetadata.title}
                </Link>
                <button
                  onClick={_ => this.toggleMenu(!openMenu)}
                  className={`navbar-toggler navbar-toggler-right ${
                    openMenu ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-controls="navbarResponsive"
                  aria-expanded={openMenu}
                  aria-label="Toggle navigation"
                >
                  ⛛
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    openMenu ? "show" : ""
                  }`}
                  id="navbarResponsive"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item my-auto ml-2">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item my-auto ml-2">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item my-auto ml-2">
                      <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                          <label className="theme-toggler nav-link">
                            <input
                              type="checkbox"
                              onChange={e =>
                                toggleTheme(e.target.checked ? "dark" : "light")
                              }
                              checked={theme === "dark"}
                            />
                            {theme === "dark" ? (
                              <div>
                                <span role="img" aria-label="Sun">
                                  🌞
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span role="img" aria-label="Moon">
                                  🌚
                                </span>
                              </div>
                            )}
                          </label>
                        )}
                      </ThemeToggler>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        )}
      />
    )
  }
}
