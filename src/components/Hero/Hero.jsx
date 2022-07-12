import './Hero.css';
import Header from "../Header/Header";
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div/>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className="figure">
                    <div><span>+ 140</span><span>EXPERT COACHES</span></div>
                    <div><span>+ 978</span><span>MEMBERS JOINED</span></div>
                    <div><span>+ 50</span><span>FITNESS PROGRAMS</span></div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 pm</span>
                </div>

                <img src={heroImage} alt="hero image" className='hero-image'/>
                <img src={heroImageBack} alt="hero image back" className='hero-image-back'/>

                <div className='calories'>
                    <img src={calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;