import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import icon1 from '../assets/home-expertise.svg';
import icon2 from '../assets/home-hygiene.svg';
import icon3 from '../assets/home-lab.svg';
import icon4 from '../assets/home-retention.svg';



class Features extends Component{
    render(){
        return(
            <section id="features">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xs-12 col-lg-6" id="about-row">
                            <div className="about__text-box">
                                <Fade left>
                                <h1 className="about-primary">
                                    <span className="primary-title primary-title--features">Learn About Our Features</span>
                                </h1>
                                </Fade>
                                <p className="about-primary--p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa.</p>
                                <a href="#cta2" className="section-btn">&#62; Learn More</a>
                            </div>
                        </div>
        
                        <div className="col-xs-12 col-lg-6" id="icons-row">
                            <div className="col-xs-12 col-lg-6 features-icons-top icons-left">
                                <img id="icons" src={icon1} alt=""/>
                                <p>Clipboards</p>
                            </div>
                            <div className="col-xs-12 col-lg-6 features-icons-top icons-right">
                                <img id="icons" src={icon2} alt=""/>
                                <p>Masks</p>
                            </div>
                            <div className="col-xs-12 col-lg-6 features-icons-bottom icons-left">
                                <img id="icons" src={icon3} alt=""/>
                                <p>Goggles</p>
                            </div>
                            <div className="col-xs-12 col-lg-6 features-icons-bottom icons-right">
                                <img id="icons" src={icon4} alt=""/>
                                <p>Calendars</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </section>

        );
    }
}

export default Features;