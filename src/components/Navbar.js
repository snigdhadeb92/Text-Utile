import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">{props.contact}</a>
                        </li>
                    </ul>
                    <div className={`custom-control custom-switch ml-auto text-${props.mode==='light'?'dark':'light'}`}>
                        <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1" />
                        <label className="custom-control-label" htmlFor="customSwitch1">Enable mode</label>
                    </div>

                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string.isRequired,
    contact: propTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Title",
    about: "About Us",
    contact: "Contact"
}
