import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Welcome to Stock Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/">Dashboard</NavLink>&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/statistic">Statistic</NavLink>&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/calculator">Calculator</NavLink>&nbsp;&nbsp;
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;