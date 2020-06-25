import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class CTA2 extends Component{
    render(){
        return(
            <section id="cta2">
                <div className="container cta2-container">
                    <div className="row cta2-row" >

                        <div className="col-xs-12 col-lg-6 cta2-div">
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="cta2__text-box">
                                <Fade left>
                                    <h1 className="cta2-primary">
                                        <span className="cta2-primary--title">Free 30 day Trial</span>
                                    </h1>
                                </Fade>
                                <a href="#" className="cta2-btn cta2-btn--animated">&#62; Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CTA2;