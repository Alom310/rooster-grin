import React, {Component} from 'react';
import About from './about';
import CTA1 from './cta1';
import Features from './features';
import CTA2 from './cta2';
import Reviews from './reviews'

class Main extends Component{
    render(){
        return(
            <div className='Main'>
                <About/>
                <CTA1/>
                <Features/>
                <CTA2/>
                <Reviews/>
            </div>
        );
    }
}

export default Main;