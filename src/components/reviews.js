import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Reviews extends Component{
    render(){
        return(
            <section id="reviews">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xs-12 col-lg-6" id="review-row">
                            <div className="review__text-box">
                                <Fade left>
                                <h1 className="review-primary">
                                    <span className="review-primary--title">Read Our Reviews!</span>
                                </h1>
                                </Fade>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>

                            </div>
                        </div>
        
                        <div className="col-xs-12 col-lg-6" id="carousel-row">
                            <div id="carousel" className="carousel__text-box">
                                <Carousel autoPlay infiniteLoop	showThumbs={false} showStatus={false} showArrows={true} showIndicators={true}>
                                    <div>
                                        <h6>John Doe 6/25/2020</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa.</p>
                                    </div>
                                    <div>
                                        <h6>Don Joe 5/12/2020</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa.</p>
                                    </div>
                                    <div>
                                        <h6>Art Vandaley 3/10/2020</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur tempora recusandae ab possimus incidunt voluptatem totam. Asperiores placeat, animi, iusto distinctio dolor dolorum quam minus sint exercitationem commodi eaque culpa.</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;