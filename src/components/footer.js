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
                        <a href="https://img.photobucket.com/albums/v116/maestros/Nature/Rooster.jpg" target="_blank"><img id="footer-logo" src={Instagram_logo} /></a>
                        <a href="https://www.facebook.com/RoosterGrin/" target="_blank"><img id="footer-logo" src={Facebook_logo} /></a> 
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;