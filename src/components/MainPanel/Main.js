import React, { Component } from 'react';
import logo from '../../logo.svg';
import './main.css';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <header className="Main-header">
                    <img src={logo} className="Main-logo" alt="logo" />
                    <p>
                        Edit <code>src/Main.js</code> and save to reload.
                    </p>
                    <a
                        className="Main-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <div className="alert alert-primary" role="alert">
                        This is a primary alert—check it out!
                    </div>
                    
                    <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a className="navbar-brand" href="#">Pepper App (user side)</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Game</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Information</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>                
            </div>

        );
    }
}

export default Main;
