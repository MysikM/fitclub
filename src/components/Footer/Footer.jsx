import './footer.css';
import gitHub from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={gitHub} alt="gitHub icon"/>
                    <img src={instagram} alt="instagram icon"/>
                    <img src={linkedIn} alt="linkedIn icon"/>
                </div>
                <div className="logo-f">
                    <img src={logo} alt="logo icon"/>
                </div>
            </div>
            <div className="blur footer-blur-1"/>
            <div className="blur footer-blur-2"/>
        </div>
    );
};

export default Footer;