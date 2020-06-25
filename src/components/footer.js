import React, {Component} from 'react';
import Instagram_logo from '../assets/instagram.svg'
import Facebook_logo from '../assets/facebook.svg'

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <div>
                    <h5>Follow Us:</h5>
                    <div>
                        <img id="footer-logo" src={Instagram_logo} />
                        <img id="footer-logo" src={Facebook_logo} />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;