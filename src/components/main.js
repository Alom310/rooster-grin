import React, {Component} from 'react';
import About from './about';
import CTA1 from './cta1';
import Features from './features';

class Main extends Component{
    render(){
        return(
            <div className='Main'>
                <About/>
                <CTA1/>
                <Features/>
            </div>
        );
    }
}

export default Main;