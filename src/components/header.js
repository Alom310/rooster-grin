import React, {Component} from 'react';
import logo from '../assets/logo-white.svg';


class Header extends Component{
    render(){
        return(
            <div className="header">
                <header className="header">
                    <div className="header__logo-box">
                        <img src={logo} alt="Logo" className="header__logo"/>
                    </div>
            
            
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Welcome To</span>
                            <span className="heading-primary--sub">Rooster Grin</span>
                        </h1>
                        <a href="#about" className="home-btn home-btn--purple home-btn--animated">Get Started</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;