import "./parallax.scss"
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll(
        {target: ref,
            offset:["start start", "end end"]
    });

    const yBg = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), {
        stiffness: 10,  // Adjust these values to change the animation behavior
        damping: 5,
      });
    
    const yText = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
        stiffness: 10,  // Adjust these values to change the animation behavior
        damping: 5,
      });

    return (
        <motion.div className="parallax" 
        ref={ref}
        style={{
            background:
            type === "services" 
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
        }}
        >
            <motion.h1  style={{ y: yText}}>{type === "services" ? "Our Specialty" : "Past projects"}</motion.h1>
            <motion.div  className="mountains"></motion.div>
            <motion.div style={{ y: yBg, backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`}} className="planets"></motion.div>
            <motion.div style={{ x: yBg}} className="stars"></motion.div>
        </motion.div>
    )
}

export default Parallax;