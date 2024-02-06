import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
}

const Hero = () => {
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>TIMILEYIN AJAYI</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer and Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button className="btn" variants={textVariants}>Contact Me</motion.button>
                        <motion.button className="btn" variants={textVariants}>View Portfolio</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Innovate. Engineer. Code. Repeat.
            </motion.div>
            <div className="imageContainer">
                <img src="./hero.png" alt="hero" />
            </div>
    </div>
    )
    
}

export default Hero