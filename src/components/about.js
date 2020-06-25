import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import img_1 from '../assets/img-1.jpg';


class About extends Component{
    render(){
        return(
            <section id="about">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xs-12 col-lg-6" id="about-row">
                            <div className="about__text-box">
                                <Fade left>
                                <h1 className="about-primary">
                                    <span className="primary-title">about</span>
                                </h1>
                                </Fade>
                                <p className="about-primary--p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa.</p>
                                <a href="#cta1" className="section-btn">&#62; Learn More</a>
                            </div>
                        </div>
        
                        <div className="col-xs-12 col-lg-6">
                            <img id="img-1" src={img_1} alt=""/>
                        </div>
        
                    </div>
                </div>
            </section>

        );
    }
}

export default About;