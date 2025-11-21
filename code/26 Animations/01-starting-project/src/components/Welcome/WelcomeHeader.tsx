import { Link } from "react-router-dom";
import cityImg from "../../assets/city.jpg";
import heroImg from "../../assets/hero.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WelcomeHeader() {
  const { scrollY } = useScroll();
  const cityOpacity = useTransform(scrollY, [0, 200, 500], [1, 0.5, 0]);
  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);

  return (
    <header id="welcome-header">
      <motion.div id="welcome-header-content" style={{ scale: scaleText, y: yText }}>
        <h1>Ready for a challenge?</h1>
        <Link id="cta-link" to="/challenges">
          Get Started
        </Link>
      </motion.div>
      <motion.img
        src={cityImg}
        alt="A city skyline touched by sunlight"
        id="city-image"
        style={{ opacity: cityOpacity, y: yCity }}
      />
      <motion.img
        src={heroImg}
        alt="A superhero wearing a cape"
        id="hero-image"
        style={{ opacity: heroOpacity, y: yHero }}
      />
    </header>
  );
}
