import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class CTA1 extends Component{
    render(){
        return(
            <section id="cta1">
                <div className="container cta1-container">
                    <div className="row cta1-row" >
                        <div className="col-xs-12 col-lg-6">
                            <div className="cta1__text-box">
                                <Fade right>
                                    <h1 className="cta1-primary">
                                        <span className="cta1-primary--title">Free 30 day Trial</span>
                                    </h1>
                                </Fade>
                                <a href="#" className="cta1-btn cta1-btn--animated">&#62; Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CTA1;