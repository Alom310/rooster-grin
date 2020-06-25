import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class CTA1 extends Component{
    render(){
        return(
            <section id="cta1">
                <div className="container">
                    <div className="row cta-row" >
                        <div className="col-xs-12 col-lg-6">
                            <div className="cta__text-box">
                                <Fade right>
                                    <h1 className="cta-primary">
                                        <span className="primary-title">Free 30 day Trial</span>
                                    </h1>
                                </Fade>
                                <a href="#features" className="section-btn section-btn--cta ">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CTA1;