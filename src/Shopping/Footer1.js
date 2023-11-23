import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footercss.css" ;

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <img src='./png2.png' alt='img'></img>
                <ul className="footer-links">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                <p className="footer-company-name">Company Name © 2015</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>
                        <span>444 S. Cedros Ave</span> Solana Beach, California
                    </p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p>
                        <a href="mailto:support@company.com">support@company.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href="https://www.facebook.com">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.twitter.com">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.github.com">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
