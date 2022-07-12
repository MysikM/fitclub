import './Hero.css';
import Header from "../Header/Header";
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import NumberCounter from "number-counter";
import {motion} from 'framer-motion';


const Hero = () => {
    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"/>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile ? '165px' : '238px'}}
                        whileInView={{left: '9px'}}
                        transition={{...transition, type: 'tween'}}
                    />
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
                    <div>
                        <span>
                            <NumberCounter end={140} start={75} delay='4' preFix='+ '/>
                        </span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>
                             <NumberCounter end={978} start={800} delay='4' preFix='+ '/>
                        </span
                        ><span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' preFix='+ '/>
                        </span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{right : '-1rem'}}
                    whileInView={{right : '4rem'}}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 pm</span>
                </motion.div>

                <img src={heroImage} alt="hero image" className='hero-image'/>
                <motion.img
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}
                    src={heroImageBack}
                    alt="hero image back"
                    className='hero-image-back'/>

                <motion.div
                    initial={{right : '37rem'}}
                    whileInView={{right : '28rem'}}
                    transition={transition}
                    className='calories'
                >
                    <img src={calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;