import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class CTA2 extends Component{
    render(){
        return(
            <section id="cta2">
                <div className="container cta-container">
                    <div className="row cta-row" >

                        <div className="col-xs-12 col-lg-6 cta2-div">
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="cta__text-box">
                                <Fade left>
                                    <h1 className="cta-primary">
                                        <span className="primary-title">Start Your Trial Today!</span>
                                    </h1>
                                </Fade>
                                <a href="#reviews" className="section-btn section-btn--cta">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CTA2;